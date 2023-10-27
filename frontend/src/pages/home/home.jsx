import "./home.scss";
import Stories from "../../components/stories/stories.jsx";
import Posts from "../../components/posts/posts.jsx";
import Share from "../../components/share/share.jsx";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home