import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { REASONS } from "../helpers/enums";
import profileLogo from "../assets/images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="home__title-wrapper">
        <h3 className="home__title">Home</h3>
        <FontAwesomeIcon icon={faStar} />
      </div>

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
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        hasComment={true}
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />

      <Post
        reasonFromPerson="Hosein Mirhoseini"
        reason={REASONS.like}
        personImage={profileLogo}
        personName="Mohsen Tahmasebi"
        personId="@moh53n"
        time="11h"
        text={"This is a sample text for a post. And i don't know what to say"}
        // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        replyCount={10}
      />
    </div>
  );
};

export default Home;
