import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { REASONS } from "../helpers/enums";
import profileLogo from "../assets/images/profile.png";

const Home = () => {
  return (
    <div className="home">
      <h3 className="home__title">Home</h3>

      {/* Add post */}
      <AddPost />
      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
    </div>
  );
};

export default Home;
