import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import "antd/dist/antd.css";

const Login = (props) => {
  const onFinish = (values) => {
    let Data = JSON.parse(localStorage.getItem("user"));
    if (values.email === Data.email && values.password === Data.password) {
      props.history.push("/blog");
      // alert("Welcome,you have successfully logged in");
    } else {
      alert("incorrect password");
    }
  };

  return (
    <div className="login">
      <Form
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="login-here">
          <h1>Login Here</h1>
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="forgot" href="">
            Forgot password ?
          </a>
        </Form.Item>

        <Form.Item>
          <Button className="login-button" type="primary" htmlType="submit">
            Log in
          </Button>{" "}
          <Form.Item className="login-register">
            Or <br /> Don't have account?
            <a>
              {" "}
              <Link to="/signup"> Sign up</Link>
            </a>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
