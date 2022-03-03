import AddPost from "../components/AddPost";
import Post from "../components/Post";


const Home = () => {
  return (
    <div className="home">
      <h3 className="home__title">Home</h3>

      {/* Add post */}
      <AddPost />
      <Post />
      <Post />
      
    </div>
  );
};

export default Home;
