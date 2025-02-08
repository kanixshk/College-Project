import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || supabaseUrl === 'your-project-url') {
  throw new Error(
    'Please click the "Connect to Supabase" button in the top right corner to set up your database connection.'
  );
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
  throw new Error(
    'Missing or invalid Supabase anonymous key. Please check your environment variables.'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);