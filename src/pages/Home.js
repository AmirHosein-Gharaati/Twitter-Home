import AddPost from "../components/AddPost";

const Home = () => {
  return (
    <div className="home">
      <h3 className="home__title">Home</h3>

      {/* Add post */}
      <AddPost />
    </div>
  );
};

export default Home;
