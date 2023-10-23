import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
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
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register