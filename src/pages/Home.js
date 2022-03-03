import AddPost from "../components/AddPost";
import profileLogo from "../assets/images/profile.png";
import logo from "../assets/vectors/logo.svg";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home">
      <h3 className="home__title">Home</h3>

      {/* Add post */}
      <AddPost />

      <div className="post">
        <div className="post-wrapper">
          <div className="post__reason">
            <FontAwesomeIcon icon={faCoffee} />
            <span className="post__reason__person">Hosein Mirhoseini</span>
            <span className="post__reason__action">liked</span>
          </div>
          <div className="post__main">
            <div className="post__profile">
              <img src={profileLogo} alt="profile" />
            </div>
            <div className="post__content">
              <div className="post__info-wrapper">
                <div className="post__info">
                  <h4>Mohsen Tahmasebi</h4>
                  <span className="post__info__id">@moh53n . </span>
                  <span className="post__info__time">11h</span>
                </div>
                <button className="btn">
                  <FontAwesomeIcon icon={faCoffee} />
                </button>
              </div>

              <div className="post__text">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>

              <div className="post__image">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="logo"
                />
              </div>

              <div className="post__buttons">
                <div className="post__buttons-wrapper">
                  <button className="btn">
                    <FontAwesomeIcon icon={faCoffee} />
                  </button>
                  <span>2</span>
                </div>

                <div className="post__buttons-wrapper">
                  <button className="btn">
                    <FontAwesomeIcon icon={faCoffee} />
                  </button>
                  <span>2</span>
                </div>

                <div className="post__buttons-wrapper">
                  <button className="btn">
                    <FontAwesomeIcon icon={faCoffee} />
                  </button>
                  <span>2</span>
                </div>

                <div className="post__buttons-wrapper">
                  <button className="btn">
                    <FontAwesomeIcon icon={faCoffee} />
                  </button>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post__end"></div>
      </div>
    </div>
  );
};

export default Home;
