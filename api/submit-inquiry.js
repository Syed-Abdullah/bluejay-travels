import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
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

  const { error } = await supabase.from('leads').insert([
    { full_name, organization, phone, email, service, pickup_location, capacity, message },
  ]);

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: 'Failed to save inquiry.' });
  }

  return res.status(200).json({ success: true });
}