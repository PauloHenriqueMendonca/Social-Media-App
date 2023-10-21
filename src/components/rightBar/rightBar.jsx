import "./rightBar.scss";
import User from "../../assetImages/user.png";
const RightBar = () => {
  return(
    <div className="rightBar">
      <div className="container">
        <div className="menu">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src= {User} alt="" />
              <span>Paulo Pereira</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src= {User} alt="" />
              <span>Paulo Pereira</span>
            </div>
            <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
        </div>
        <div className="menu">
          <span>Lastest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Paulo Pereira</span> Changed their cover picture
              </p>
            </div>
            <div>
              <span> 1 min ago</span>    
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Paulo Pereira</span> Changed their cover picture
              </p>
            </div>
            <div>
              <span> 1 min ago</span>    
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Paulo Pereira</span> Changed their cover picture
              </p>
            </div>
            <div>
              <span> 1 min ago</span>    
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <p>
                <span>Paulo Pereira</span> Changed their cover picture
              </p>
            </div>
            <div>
              <span> 1 min ago</span>    
            </div>
          </div>
        </div>
        <div className="menu">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Paulo Pereira</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Paulo Pereira</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Paulo Pereira</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Paulo Pereira</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={User} alt="" />
              <div className="online" />
              <span>Paulo Pereira</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar