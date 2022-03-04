import AddPost from "../components/AddPost";
import Post from "../components/Post";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Home = ({dummyData}) => {
  const [data, setData] = useState(dummyData);

  return (
    <div className="home">
      <div className="home__title-wrapper">
        <h3 className="home__title">Home</h3>
        <FontAwesomeIcon icon={faStar} />
      </div>

      {/* Add post */}
      <AddPost data={data} setData={setData} />

      {data ? (
        data.map((post, postIndex) => {
          return (
            <Post
              key={postIndex}
              reasonFromPerson={post.reasonFromPerson}
              reason={post.reason}
              personImage={post.personImage}
              personName={post.personName}
              personId={post.personId}
              time={post.time}
              text={post.text}
              imageUrl={post.imageUrl}
              replyCount={post.replyCount}
              retweetCount={post.retweetCount}
              likeCount={post.likeCount}
              shareCount={post.shareCount}
              hasComment={post.hasComment}
            />
          );
        })
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};

export default Home;
