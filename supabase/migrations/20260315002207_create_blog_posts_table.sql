/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `title` (text) - Post title / H1
      - `meta_description` (text) - SEO meta description
      - `excerpt` (text) - Short summary shown on listing page
      - `content` (text) - Full HTML/markdown content
      - `cover_image_url` (text) - Hero image URL
      - `cover_image_alt` (text) - Image alt text for SEO
      - `category` (text) - Interior, Exterior, Tips, etc.
      - `tags` (text[]) - Keyword tags
      - `primary_keyword` (text) - Target SEO keyword
      - `read_time_minutes` (int) - Estimated read time
      - `status` (text) - 'published' or 'scheduled'
      - `published_at` (timestamptz) - When to show publicly
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `blog_posts` table
    - Public read policy for published posts only
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  meta_description text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  cover_image_url text NOT NULL DEFAULT '',
  cover_image_alt text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'General',
  tags text[] NOT NULL DEFAULT '{}',
  primary_keyword text NOT NULL DEFAULT '',
  read_time_minutes int NOT NULL DEFAULT 5,
  status text NOT NULL DEFAULT 'scheduled',
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts FOR SELECT
  USING (status = 'published' AND published_at <= now());
