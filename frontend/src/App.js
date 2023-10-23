import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import Home from './pages/home/home.jsx';
import Profile from './pages/profile/profile.jsx';
import NavBar from './components/navBar/navBar.jsx';
import RightBar from './components/rightBar/rightBar.jsx';
import LeftBar from './components/leftBar/leftBar.jsx';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./style.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext.js';
import { AuthContext } from './context/authContext.js';


function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);
  //layout design of how its going to be shown in screen
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  //to verify if you are logged in or not if not logged in send to log in page else continue
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />;
    }

    return children;
  };

  //to navigate between pages
  const router = createBrowserRouter([
    //To use the Layout and when you click each place of the navBar to take you to it
    {
      path: "/",
      element: (
        //this is how to protect each page to verify if user is logged in. Wrap the <Layout/> with the ProtectedRoute function
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
