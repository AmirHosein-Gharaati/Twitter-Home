import AddPost from "../components/AddPost";
import dots from "../assets/images/dots.png";
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
        <div className="post__reason">
          <FontAwesomeIcon icon={faCoffee} />
          <span className="post__reason__person">Hosein Mirhoseini</span>
          <span className="post__reason__action">liked</span>
        </div>
        <div className="post__main">
          <div className="post__profile">
            <img src={profileLogo} alt="profile" />
            <div className="post__profile__comment-line"></div>
          </div>
          <div className="post__content">
            <div className="post__info-wrapper">
              <div className="post__info">
                <h4>Mohsen Tahmasebi</h4>
                <span className="post__id">@moh53n . </span>
                <span className="post__time">11h</span>
              </div>
              <button className="btn">
                <img src={dots} alt="more" />
              </button>
            </div>

            <div className="post__text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>

            <div className="post__image">
              <img src={profileLogo} alt="logo" />
            </div>

            <div className="post__buttons">
              <div className="post__buttons-wrapper">
                <button>
                  <img src={logo} alt="logo" />
                </button>
                <span>2</span>
              </div>

              <div className="post__buttons-wrapper">
                <button>
                  <img src={logo} alt="logo" />
                </button>
                <span>2</span>
              </div>

              <div className="post__buttons-wrapper">
                <button>
                  <img src={logo} alt="logo" />
                </button>
                <span>2</span>
              </div>

              <div className="post__buttons-wrapper">
                <button>
                  <img src={logo} alt="logo" />
                </button>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
