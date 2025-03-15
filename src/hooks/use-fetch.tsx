import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb: any, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fn = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const supabaseAccessToken = (await session?.getToken({
        template: "supabase",
      })) as string;

      const res = await cb(supabaseAccessToken, options, ...args);
      setData(res);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { fn, data, loading, error };
};

export default useFetch;
