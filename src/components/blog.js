import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./blog.css";
const { Header, Footer } = Layout;

const Blog = (props) => {
  const handleclick = () => {
    props.history.push("/post");
  };
  const onFinish = () => {
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

          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">
              {" "}
              <Link to="/blog" />
              Home
            </Menu.Item>

            <Button
              style={{ marginTop: "6%", marginRight: "5%", marginLeft: "2%" }}
              onClick={handleclick}
            >
              Create
            </Button>
            <Button style={{ marginTop: "6%" }} onClick={onFinish}>
              Logout
            </Button>
          </Menu>
        </Header>

        <div
          className="contant"
          style={{ alignItems: "center", backgroundColor: "white" }}
        >
          <img
            alt="Story Book"
            style={{ width: "50%", marginLeft: "25%" }}
            src="https://s3.amazonaws.com/media.cloversites.com/83/83052ce3-e450-4e0a-84f7-cf92306e04b6/gallery/slides/6059ae24-90b4-4dfc-89ac-5b3fe2a5f01a.jpg"
          />
          <h1>Let start,your post is empty now.</h1>
          <p style={{ textAlign: "center" }}>
            Create your post now to{" "}
            <u>
              {" "}
              <Link to="/post">Click Here </Link>
            </u>{" "}
          </p>
        </div>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Story Book ©2021 Created by Hemalatha.
        </Footer>
      </Layout>
    </>
  );
};

export default Blog;
