/*
  # Create leads table for Paintworks landing page

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required) - Lead's full name
      - `email` (text, required) - Lead's email address
      - `phone` (text, required) - Lead's phone number for SMS communication
      - `offer_interest` (text, optional) - Which offer the lead is interested in
      - `sms_opt_in` (boolean, default true) - A2P compliance: explicit SMS consent
      - `created_at` (timestamptz) - When the lead was captured
      - `ip_address` (text, optional) - For tracking purposes
      - `user_agent` (text, optional) - Browser information

  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert their own leads
    - Add policy for authenticated admins to view all leads
    
  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for chronological queries
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  offer_interest text,
  sms_opt_in boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (for the public form)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view leads (for admin panel later)
CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);