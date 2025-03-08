import { Header } from "antd/es/layout/layout";
import { Button, Flex, Typography, Drawer } from "antd";
import { useState } from "react";
import AddVacancyForm from "../components/AddVacancyForm";

const headerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  height: 100,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#969fb0",
};

const AppHeader: React.FC = () => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <Header style={headerStyle}>
      <Flex vertical gap="0" align="flex-start">
        <Typography.Title level={2} style={{ margin: 0 }}>
          Olena Paschenko
        </Typography.Title>
        <Typography.Title
          level={5}
          style={{ marginTop: "15px", marginBottom: 0 }}
        >
          Senior Frontend engineer
        </Typography.Title>
      </Flex>
      <Button type="primary" onClick={() => setDrawer(true)}>
        Add Job Vacancy
      </Button>
      <Drawer
        width={600}
        title="Add vacancy"
        onClose={() => setDrawer(false)}
        open={drawer}
        destroyOnClose
      >
        <AddVacancyForm onClose={() => setDrawer(false)}/>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
