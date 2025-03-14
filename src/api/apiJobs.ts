import supabaseClient from "@/utils/superbase";

export async function getJobs(token: string) {
  const supabase = await supabaseClient(token);

  const query = supabase.from("jobs").select("*");

  const { data, error } = await query;

  if (error) {
    console.log("Error Fetching Data");
    return null;
  }
  return data;
}
