import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./Login/LoginPage";
import Home from "./Login/Home";
import Task from "./Login/Task";
import User from "./Login/User";
import { Navigation } from "./Login/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangePass } from "./Login/ChangePass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />{" "}
          <Route exact path="/nav/" element={<Navigation />}>
            {" "}
            <Route exact path="/nav/home" element={<Home />} />{" "}
            <Route exact path="/nav/task" element={<Task />} />{" "}
            <Route exact path="/nav/user" element={<User />} />{" "}
            <Route exact path="/nav/change" element={<ChangePass />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
