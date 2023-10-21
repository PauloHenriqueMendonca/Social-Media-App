import { useContext } from "react";
import "./comments.scss";
import{AuthContext} from "../../context/authContext.js";
const Comments = () => {

  const {currentUser} = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "Paulo Pereira",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quas explicabo repudianda",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Paulo Pereira",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quas explicabo repudianda",
    },
  ]
  return(
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment"/>
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))
      }</div>
  )
}

export default Comments