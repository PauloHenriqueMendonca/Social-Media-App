import "./profile.scss";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Posts from "../../components/posts/posts.jsx";

const Profile = () => {
  return(
    <div className="profile" >
        <div className="images">
          <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="cover" />
          <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="profile" />
        </div>
        <div className="profileContainer">
          <div className="userInformation">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookTwoToneIcon fontSize="large" />
              </a>
              <a href="http://linkedin.com">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="http://instagram.com">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="http://twitter.com">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="http://pinterest.com">
                <PinterestIcon fontSize="large" />
              </a>
            </div>
            <div className="center">
              <span>Paulo Pereira</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon/>
                  <span>Brasil</span>
                </div>
                <div className="item">
                  <LanguageIcon/>
                  <span>Paulo.com</span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="right">
              <EmailOutlinedIcon/>
              <MoreVertIcon/>
            </div>
          </div>
        <Posts/>
        </div>
    </div>
  )
}

export default Profile