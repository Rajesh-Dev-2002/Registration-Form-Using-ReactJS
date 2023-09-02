import React, { useEffect, useState } from "react";
import App from "./App.css";

export default function Form() {
  const [flag, setFlag] = useState(false);
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      inputData.name == "" ||
      inputData.email == "" ||
      inputData.password == ""
    ) {
      alert("All the fields are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
    <pre>{(flag)?<h2 className="ui-define">Hello {inputData.name},you've Registered Successfully</h2>:""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
