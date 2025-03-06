import { jobsData } from "./data";

const fakeFetchJobs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobsData);
    }, 100);
  });
};

export default fakeFetchJobs;

