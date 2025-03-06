import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { useJobs, Job } from "../context/jobs-context";
import AutocompleteSearch from "../components/AutocompleteSearch";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/hooks";

const AppContent: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
    minHeight: "calc(100vh - 60px)",
    color: "#fff",
    backgroundColor: "#001529",
    padding: "1rem",
  };
  const { jobs, loading } = useJobs();
  const [searchJob, setSearchJob] = useState<Job[]>(jobs);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const filteredJobs = !debouncedSearch
      ? jobs
      : jobs.filter((job) =>
          job.title
            .toLocaleLowerCase()
            .includes(debouncedSearch.toLocaleLowerCase())
        );

    setSearchJob(filteredJobs);
  }, [debouncedSearch, jobs]);

  if (loading) {
    return (
      <Content style={contentStyle}>
        <Card loading={true} />
      </Content>
    );
  }

  return (
    <Content style={contentStyle}>
      <AutocompleteSearch onChange={setSearch} />
      {searchJob.map((job: Job) => {
        return (
          <Card
            key={job.id}
            size="small"
            style={{ width: 300, textAlign: "left", marginBottom: "10px" }}
          >
            <p style={{ margin: 0 }}>
              <strong>Company name: </strong>
              {job.title}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Vacancy: </strong>
              {job.position}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Salary: </strong>
              {job.salary}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Date: </strong>
              {job.date}
            </p>
          </Card>
        );
      })}
    </Content>
  );
};

export default AppContent;
