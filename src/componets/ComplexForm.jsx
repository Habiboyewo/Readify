import React,{useState} from "react";

const ComplexForm = () => {
    const [user, setUser] = useState({
        email:"",
        username:"",
        phone: "",
        address:"",

})
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name] :value});

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        setUser({
            email:"",
            username:"",
            phone: "",
            address:"",
        })
    }
  return (
    <div>
      <div className="w-50 m-auto mt-4">
        <form>
          <div>
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input 
            type="email" 
            id="email" 
            className="form-control" 
            name="email" 
            value={user.email} 
            onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input 
            type="text" 
            id="username" 
            className="form-control" 
            name="username" 
            value={user.username} 
            onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="tel" className="form-label">
              Phone Number:
            </label>
            <input 
            type="tel" 
            id="tel" 
            className="form-control" 
            name="phone" 
            value={user.phone} 
            onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="address" className="form-label" >
              Address:
            </label>
            <textarea
              name="address"
              id="address"
              className="form-control"
              cols="30"
              rows="10"
              value={user.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplexForm;