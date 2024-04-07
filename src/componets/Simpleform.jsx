import React, { useState } from "react";
// .value
// default behaviour  - submitted it reloads the web page
// onsubmit on the form
// onclick on the button attahed to the form

//controlled input
//checkbox
//select options field
const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    //prevent default Behaviour
    event.preventDefault();
    // when user submits
    console.log("user submitted");
    if (!email || !username) {
      setError("please provide necessary details");
    }

    // username must be 5 characters minimum
    if (username.length < 5) {
      setError("Minimu username length is 5");
    }
  };
  return (
    <div>
      <div className="w-50 p-3 shadow-lg m-auto bg-body-tertiary">
        <form onSubmit={handleSubmit}>
          <small className="text-danger"> {error} </small>
          <div className="my-2">
            <select
              name=""
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="">Select title</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="miss">Miss</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email :{" "}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="username" className="form-label">
              Username :{" "}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="my-2">
            <input
              type="checkbox"
              id="agreement"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agreement">* Agree to terms and Conditions</label>
          </div>
          <button
            type="submit"
            disabled={agree ? false : true}
            className="btn btn-outline-dark my-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;