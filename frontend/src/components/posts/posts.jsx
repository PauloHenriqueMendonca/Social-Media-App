import './posts.scss';
import PostButtons from "../postsButtons/postButtons.jsx";

const Posts = () => {

  const posts = [
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
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quas explicabo repudianda",
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
       <PostButtons post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts;