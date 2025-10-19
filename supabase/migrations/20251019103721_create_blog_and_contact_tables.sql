/*
  # Personal Website Database Schema

  ## Overview
  This migration creates the necessary tables for a personal website with blog functionality
  and contact form submissions.

  ## New Tables

  ### `blog_posts`
  Stores all blog post content with support for Persian and English text.
  - `id` (uuid, primary key) - Unique identifier for each post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly version of title
  - `excerpt` (text) - Short description for previews
  - `content` (text) - Full blog post content (supports markdown)
  - `featured_image` (text, nullable) - URL to featured image
  - `published` (boolean) - Whether post is publicly visible
  - `view_count` (integer) - Number of times post has been viewed
  - `tags` (text array) - Categorization tags
  - `published_at` (timestamptz, nullable) - When post was published
  - `created_at` (timestamptz) - When post was created
  - `updated_at` (timestamptz) - Last modification time

  ### `contact_submissions`
  Stores contact form submissions.
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email
  - `message` (text) - Message content
  - `status` (text) - Processing status (new, read, replied)
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on both tables
  - Public read access to published blog posts only
  - Public insert access to contact submissions
  - No public access to unpublished posts or contact data

  ## Indexes
  - Index on blog_posts.slug for fast lookups
  - Index on blog_posts.published_at for sorting
  - Index on contact_submissions.status for filtering
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  published boolean DEFAULT false,
  view_count integer DEFAULT 0,
  tags text[] DEFAULT '{}',
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Blog posts policies
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can increment view count"
  ON blog_posts
  FOR UPDATE
  USING (published = true)
  WITH CHECK (published = true);

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();