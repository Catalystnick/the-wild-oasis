import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nrodaxnjsyhfmvpxkxxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yb2RheG5qc3loZm12cHhreHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0MzQyNDUsImV4cCI6MjAyNzAxMDI0NX0.qKzsEZjaEOIi2txpygIokqqQXQND2QrYpIK76cisvLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
