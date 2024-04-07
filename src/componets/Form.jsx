import React, { useState } from "react";
import '../css/Form.css';
//name
// value
const Form = () => {
  const [person, setPerson] = useState({
    email:"",
    username: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //make sure user isnt submitting empty values
    if (!person.username || !person.password || !person.confirm) {
      handleError("*please provide values");
    } else if (person.username.length < 7) {
      handleError("Minimum username length is 7");
    } else if (person.password.length < 8) {
      handleError("Minimum password length is 8");
    } else if (person.password !== person.confirm) {
      handleError(" password does not match");
    } else {
      setSuccess("Congratulations, welcome aboard");

      setError("");
      setPerson({
        email:"",
        username: "",
        password: "",
        confirm: "",
      });
    } 
  };
  return (
    <div>
      <div className="w-50 m-auto my-4">
        <form onSubmit={handleFormSubmit}>
          <p className="text-danger">{error} </p>
          <p className="text-success">{success} </p>

            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={person.email}
              onChange={handleChange}
              className="form-control"
            />

          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={person.username}
            onChange={handleChange}
          />

          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={person.password}
            onChange={handleChange}
          />

          <label htmlFor="confirm" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm"
            className="form-control"
            name="confirm"
            value={person.confirm}
            onChange={handleChange}
          />
          <button className="btn btn-primary my-2">Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Form;