import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

if (!supabaseUrl) {
  throw "SUPABASE_URL not found";
}

if (!supabaseKey) {
  throw "SUPABASE_KEY not found";
}

export const supabase = createClient(supabaseUrl, supabaseKey);
