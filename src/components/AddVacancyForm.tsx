import { Button, DatePicker, Form, Input, Result } from "antd";
import { Job, useJobs } from "../context/jobs-context";
import { getId } from "../utils/utils";
import { useRef, useState } from "react";

const AddVacancyForm = ({onClose}: {onClose: () => void}) => {
  const [form] = Form.useForm();
//   const { vacancy, addVacancy } = useJobs();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const vacancyRef = useRef<Job | undefined>(undefined);

  if (submitted) {
    return (
      <Result
        status="success"
        title="New vacancy was added"
        subTitle={`Added ${vacancyRef?.current?.title} ${vacancyRef?.current?.position} ${vacancyRef?.current?.salary} ${vacancyRef?.current?.date}`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>
        ]}
      />
    );
  }

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: Job) => {
    const newVacancy = {
      id: getId(values.title),
      title: values.title,
      position: values.position,
      salary: values.salary,
      date: values.date,
    };

    vacancyRef.current = newVacancy;

    // addVacancy(newVacancy);
    setSubmitted(true);
    console.log("finish", values);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        maxWidth: "calc(100% - 20px)",
      }}
      validateMessages={validateMessages}
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
          },
        ]}
        style={{ width: "800px" }}
        label="Company name"
      >
        <Input placeholder="Input company name" />
      </Form.Item>
      <Form.Item
        name="position"
        rules={[
          {
            required: true,
          },
        ]}
        style={{ width: "800px" }}
        label="Vacancy"
      >
        <Input placeholder="Input vacancy" />
      </Form.Item>
      <Form.Item name="salary" style={{ width: "800px" }} label="Salary">
        <Input placeholder="Input salary" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
          },
        ]}
        style={{ width: "800px" }}
        label="Date and time"
        name="date"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item style={{ width: "800px" }} label={null}>
        <Button type="primary" htmlType="submit">
          Add new vacancy
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddVacancyForm;
