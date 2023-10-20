import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
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
            <input type= "text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>
          <button>Sign In</button>
        </div>

      </div>

    </div>
  )
}

export default Login