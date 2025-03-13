import { createContext, useContext, useEffect, useState } from "react";
import fakeFetchJobs from "../api";

export interface Job {
  id: string;
  title: string;
  position: string;
  salary: string;
  date: string;
}

export interface JobsContextType {
  jobs: Job[];
  loading: boolean;
}

const JobsContext = createContext<JobsContextType>({
  jobs: [],
  loading: false,
});

interface JobsContextProviderProps {
  children: React.ReactNode;
}

interface JobsState {
  data: Job[];
}

export function JobsContextProvider({ children }: JobsContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);

      const { data }: any = await fakeFetchJobs();
      setJobs(data);
      setLoading(false);
    }

    preload();
  }, []);

  return (
    <JobsContext.Provider value={{ loading, jobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs(): JobsContextType {
  return useContext(JobsContext);
}

export default JobsContextProvider;
