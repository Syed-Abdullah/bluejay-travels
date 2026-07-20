import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. CORS / Origin Protection
  const origin = req.headers.origin || req.headers.referer || '';
  const isAllowedOrigin = origin.includes('localhost') || origin.includes('bluejay-travels.vercel.app') || origin.includes('bluejaytravels.in');
  
  if (!isAllowedOrigin && process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Forbidden origin' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    full_name,
    organization,
    phone,
    email,
    service,
    pickup_location,
    capacity,
    message,
    website,
  } = req.body;

  // 3. Honeypot Check (Anti-Bot)
  if (website) {
    // If the invisible 'website' field is filled, it's a bot.
    // Return a fake success so the bot thinks it worked and stops trying.
    console.log('Bot blocked by honeypot');
    return res.status(200).json({ success: true });
  }

  if (!full_name || full_name.trim().length < 2) {
    return res.status(400).json({ error: 'Please provide a valid name.' });
  }

  // Strip all non-numeric characters from the phone to count actual digits
  const phoneDigits = phone ? phone.replace(/\D/g, '') : '';
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return res.status(400).json({ error: 'Please provide a valid 10+ digit phone number.' });
  }

  // If email is provided, verify it actually looks like an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // 2. Data Length Limits (Anti-Database Bloat)
  if (full_name.length > 100 || phone.length > 25) {
    return res.status(400).json({ error: 'Invalid primary input length.' });
  }
  if (organization && organization.length > 150) return res.status(400).json({ error: 'Input too long.' });
  if (email && email.length > 100) return res.status(400).json({ error: 'Input too long.' });
  if (service && service.length > 100) return res.status(400).json({ error: 'Input too long.' });
  if (pickup_location && pickup_location.length > 250) return res.status(400).json({ error: 'Input too long.' });
  if (capacity && capacity.length > 50) return res.status(400).json({ error: 'Input too long.' });
  if (message && message.length > 2000) return res.status(400).json({ error: 'Message too long.' });

  const { error } = await supabase.from('leads').insert([
    { full_name, organization, phone, email, service, pickup_location, capacity, message },
  ]);

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: 'Failed to save inquiry.' });
  }

  // 4. Send Email Notification
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: 'Blue Jay Travels <onboarding@resend.dev>', // Resend testing domain
        to: 'leadsbluejay@gmail.com', // Updated to match your new Resend account
        subject: `New Lead: ${full_name} - ${service || 'General Inquiry'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #1a365d;">New Transportation Inquiry 🚐</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${full_name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Organization:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${organization || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${service || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Capacity:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${capacity || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${pickup_location || 'N/A'}</td></tr>
              <tr><td style="padding: 10px;"><strong>Message:</strong></td><td style="padding: 10px;">${message || 'N/A'}</td></tr>
            </table>
          </div>
        `
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // We don't throw an error here because the lead was successfully saved to Supabase
    }
  }

  return res.status(200).json({ success: true });
}