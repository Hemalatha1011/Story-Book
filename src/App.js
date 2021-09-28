import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/blog";
import Post from "./components/post";
import View from "./components/view";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/view" component={View} />
    </Router>
  );
}

export default App;
