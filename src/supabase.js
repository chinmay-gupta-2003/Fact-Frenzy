import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bnriojmjxavolxnsbnhk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJucmlvam1qeGF2b2x4bnNibmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxODM5ODYsImV4cCI6MTk5MTc1OTk4Nn0.hN9E0e2FN0ZPfXNyDTNc6kl1ywA-27UK52q4hkvcW9M"
);

export default supabase;
