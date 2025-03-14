import { getJobs } from "@/api/apiJobs";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

export const JobListing = () => {
  const { session } = useSession();

  const fetchJobs = async () => {
    const supabaseAccessToken = (await session?.getToken({
      template: "supabase",
    })) as string;
    const data = await getJobs(supabaseAccessToken);
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return <div>JobListing</div>;
};
