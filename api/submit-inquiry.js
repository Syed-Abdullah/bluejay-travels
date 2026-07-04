import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  // 1. CORS / Origin Protection
  const origin = req.headers.origin || req.headers.referer || '';
  const isAllowedOrigin = origin.includes('localhost') || origin.includes('bluejay-travels.vercel.app');
  
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
  } = req.body;

  if (!full_name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
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

  return res.status(200).json({ success: true });
}