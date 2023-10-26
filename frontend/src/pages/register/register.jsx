import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange =e => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e => {
    //will not refresh page when clicked on the handleClick button
    e.preventDefault();

    try{

      await axios.post("http://localhost:8800/api/auth/register", inputs)

    }catch(err){
      setErr(err.response.data);
    }
  }
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <h1>Paulo Social!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, magnam consectetur ab ipsa illum delectus rem nobis quas exercitationem molestias, fugit eveniet ad, cumque quaerat nulla libero vitae a architecto!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <form>
            <h1>Register</h1>
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register