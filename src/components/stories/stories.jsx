import './stories.scss';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



const Stories = () => {

  const {currentUser} = useContext(AuthContext);


  const stories = [
    {
      id: 1,
      name: "Paulo Pereira",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "Paulo Pereira",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "Paulo Pereira",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 4,
      name: "Paulo Pereira",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ];

  return(
    <div className='stories'>
      <div className="story">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;