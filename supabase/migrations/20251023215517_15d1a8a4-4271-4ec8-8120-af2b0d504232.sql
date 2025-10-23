-- Create mailing_list_submissions table
CREATE TABLE public.mailing_list_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  country TEXT NOT NULL,
  email TEXT NOT NULL,
  feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mailing_list_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit to mailing list"
ON public.mailing_list_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_mailing_list_email ON public.mailing_list_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX idx_mailing_list_created_at ON public.mailing_list_submissions(created_at DESC);