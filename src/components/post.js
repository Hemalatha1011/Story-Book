import React, { useState } from "react";
import { Button, Input, Layout, Menu, Form, message } from "antd";
import "antd/dist/antd.css";
import "./blog.css";
import { Link } from "react-router-dom";

const { TextArea } = Input;
const { Header, Footer } = Layout;

const Post = (props) => {
  const [saveLoading, setsaveLoading] = useState(false);
  const [form] = Form.useForm();

  const Finish = () => {
    // console.log("aaaa", props.history);
    props.history.push("/");
  };
  const handleClick = () => {
    let name = JSON.parse(localStorage.getItem("name"));

    if (name.title && name.description) {
      props.history.push("/view");
    } else {
      message.error("Story is not found");
    }
  };
  const handleFinish = (values) => {
    setsaveLoading(true);
    localStorage.setItem("name", JSON.stringify(values));
    message.success("Story Create Successfully");
    props.history.push("/view");
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img
              alt="Story Book"
              style={{ width: "100px" }}
              src="https://www.kindpng.com/picc/m/360-3606666_storybook-png-transparent-png.png"
            />
          </div>

          <Menu className="menu" theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/blog" />
              Home
            </Menu.Item>

            <Button
              style={{ marginTop: "7%", marginRight: "5%", marginLeft: "2%" }}
              onClick={handleClick}
            >
              View
            </Button>

            <Button style={{ marginTop: "7%" }} onClick={Finish}>
              Logout
            </Button>
          </Menu>
        </Header>
        <div className="cointainer">
          <h1>CREATE YOUR STORY</h1>

          <Form className="form" onFinish={handleFinish} form={form}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please enter title!" }]}
            >
              <Input
                style={{ height: "50px" }}
                type="text"
                placeholder="Title"
              />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[{ required: true, message: "Please enter description!" }]}
            >
              <TextArea
                style={{ height: "200px" }}
                type="text"
                placeholder="Description"
              />
            </Form.Item>
            <Form.Item>
              <div className="button" style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit" loading={saveLoading}>
                  Publish
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Story Book ©2021 Created by Hemalatha.
        </Footer>
      </Layout>
    </div>
  );
};
export default Post;
