import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = async (supabaseAccessToken: any) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
  return supabase;
};

export default supabaseClient;

/****
 * supabase setup --- database
 * clerk setup --- authentication
 * Integrate Supabase with Clerk
 */
