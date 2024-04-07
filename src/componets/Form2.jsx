import React, { useState } from "react";

const Task = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //make sure user isnt submitting empty values
    if (!username || !password || !confirmPassword) {
      setError("please provide values");
    } else if (username.length < 7) {
      setError("Minimum username length is 7");
    } else if (password.length < 8) {
      setError("Minimum password length is 8");
    } else if (password !== confirmPassword) {
      setError(" password does not match");
    } else {
      setSuccess("Congratulations, welcome aboard");
      setUserName("");
      setConfirmPassword("");
      setPassword("");
      setError("");
    }
  };
  return (
    <div>
      <div className="w-50 m-auto my-4">
        <form onSubmit={handleFormSubmit}>
          <p className="text-danger">{error} </p>
          <p className="text-success">{success} </p>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="password"
            className="form-control"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btn btn-primary my-2">Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Task;