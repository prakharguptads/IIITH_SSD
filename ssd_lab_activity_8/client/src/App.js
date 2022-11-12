import React, { useState } from "react";
import 'react-dropdown/style.css';
import "./styles.css";
import axios from 'axios';
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from "./Students";
import Tas from "./Tas";
function App() {

  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    console.log(roll, password, role);
    const configuration = {
      method: "post",
      url: "http://localhost:5000/login/",
      data: {
        roll,
        password,
        role,
      },
    };

    axios(configuration)
      .then((result) => {

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  const handleSubmit1 = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    console.log(roll, password, role);
    const configuration = {
      method: "post",
      url: "http://localhost:5000/register/",
      data: {
        roll,
        password,
        role,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const handleChange1 = (event) => {
    setRoll(event.target.value)
  }
  const handleChange2 = (event) => {
    setPassword(event.target.value)
  }
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="title">Re-Eval Portal </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Roll </label>
          <input type="text" name="roll" required onChange={handleChange1} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required onChange={handleChange2} />
        </div>
        <div className="input-container">
          <label>Role </label>
          <select value={role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="ta">TA</option>
          </select>
        </div>
        <div className="button-container">
          <input type="submit" value={"Log In"} onClick={(e) => handleSubmit(e)} />
          <input type="submit" value={"Sign Up"} onClick={(e) => handleSubmit1(e)} />
        </div>
      </form>
    </div>
  );

  if (login) {
    console.log(role)
    if (role == "student") {
      return (
        <div className="app">
          <div className="login-form">
            <Students />
          </div>
        </div >
      );
    }
    else {
      return (
        <div className="app">
          <div className="login-form">
            <Tas />
          </div>
        </div >
      );
    }
  }
  else {
    return (
      <div className="app">
        <div className="login-form">
          {renderForm}
        </div>
      </div >
    );
  }
}

export default App; 
