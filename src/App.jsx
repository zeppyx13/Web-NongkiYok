import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./views/Data";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
