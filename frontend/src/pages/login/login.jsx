import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useState } from "react";
const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  
  const handleChange =e => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const {login} = useContext(AuthContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    }catch(err){
      setErr(err.response.data);
    }
  }

  return (
    <div className="login">

      <div className="container">

        <div className="left">
          <h1> Hello World!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum numquam quis quidem nostrum hic laboriosam! Totam illum facilis, neque fugiat quidem distinctio cupiditate, a alias id voluptates aperiam adipisci!</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register Here</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type= "text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange}/>
          </form>
          {err && err}
          <button onClick={handleLogin} >Sign In</button>
        </div>

      </div>

    </div>
  )
}

export default Login