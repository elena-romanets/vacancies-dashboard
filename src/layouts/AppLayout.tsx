import { Layout } from "antd";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

const layoutStyle = {
  width: "100vw",
};

const AppLayout: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
        <AppHeader />
        <AppContent />
    </Layout>
  );
};

export default AppLayout;
