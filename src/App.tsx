import JobsContextProvider from "./context/jobs-context";
import AppLayout from "./layouts/AppLayout";

const App: React.FC = () => {
  return (
    <JobsContextProvider>
      <AppLayout />
    </JobsContextProvider>
  );
};

export default App;