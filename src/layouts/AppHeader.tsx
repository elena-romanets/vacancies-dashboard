import { Header } from "antd/es/layout/layout";
import { Button, Flex, Typography } from "antd";

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
      <Button type='primary'>
        Add Job Vacancy
      </Button>
    </Header>
  );
};

export default AppHeader;
