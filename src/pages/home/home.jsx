import "./home.scss";
import Stories from "../../components/stories/stories.jsx";
import Posts from "../../components/posts/posts.jsx";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home