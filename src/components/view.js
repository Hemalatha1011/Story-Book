import React from "react";
import "./blog.css";
import { Layout, Button, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer } = Layout;

function View(props) {
  let name = JSON.parse(localStorage.getItem("name"));

  const Finish = () => {
    // console.log("aaaa", props.history);
    props.history.push("/");
  };

  return (
    <>
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
            >
              <Link to="/Post">back</Link>
            </Button>

            <Button style={{ marginTop: "7%" }} onClick={Finish}>
              Logout
            </Button>
          </Menu>
        </Header>

        <div
          className="story"
          style={{ textAlign: "center", backgroundColor: "teal" }}
        >
          <h2>
            <u>{name.title}</u>
          </h2>{" "}
          <h3>{name.description}</h3>
        </div>
        <Footer
          style={{
            textAlign: "center",
            // backgroundColor: "transparent",
            paddingTop: "2%",
          }}
        >
          Story Book ©2021 Created by Hemalatha.
        </Footer>
      </Layout>
    </>
  );
}

export default View;
