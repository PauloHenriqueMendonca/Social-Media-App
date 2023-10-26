import "./leftBar.scss";
import Friends from "../../assetImages/friends.png";
import Groups from "../../assetImages/Groups.png";
import MarketPlace from "../../assetImages/market.png";
import Watch from "../../assetImages/watch.png";
import Memories from "../../assetImages/memories.png";
import Events from "../../assetImages/calendar.png";
import Gaming from "../../assetImages/gaming.png";
import Gallery from "../../assetImages/gallery.png";
import Videos from "../../assetImages/videos.png";
import Messages from "../../assetImages/messages.png";
import Fundraiser from "../../assetImages/fundraiser.png";
import Tutorial from "../../assetImages/tutorials.jpg";
import Courses from "../../assetImages/courses.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const LeftBar =() => {

  const {currentUser} = useContext(AuthContext);

  return(
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img 
            src={currentUser.profilePic}
            alt={currentUser.name} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorial} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar