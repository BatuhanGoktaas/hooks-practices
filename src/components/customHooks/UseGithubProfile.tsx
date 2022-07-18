import { useEffect, useState } from "react";

const useGithubProfile = (username: string) => {
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setError(null);
        setUser(data);
        setIsLoading(false);
      } catch (err) {
        setUser(null);
        setError(`${err}`);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return { user, error, isLoading };
};

export default useGithubProfile;
