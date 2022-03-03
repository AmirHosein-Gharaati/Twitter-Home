import logo from "../assets/vectors/logo.svg";
import profileLogo from "../assets/images/profile.png";
import dots from "../assets/images/dots.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faNoteSticky,
  faList,
  faPerson,
  faDotCircle,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <button className="btn nav__icon" href="#home">
          <img src={logo} alt="twitter-icon" />
        </button>

        <nav className="navbar">
          <li>
            <div className="navbar__item navbar__active btn">
              <FontAwesomeIcon icon={faHome} />
              <a href="#home">Home</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faHashtag} />
              <a href="#explore">explore</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faBell} />
              <a href="#notifications">notifications</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="#messages">messages</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faNoteSticky} />
              <a href="#bookmarks">bookmarks</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faList} />
              <a href="#lists">lists</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faPerson} />
              <a href="#profile">profile</a>
            </div>
          </li>

          <li>
            <div className="navbar__item btn">
              <FontAwesomeIcon icon={faDotCircle} />
              <a href="#more">more</a>
            </div>
          </li>

          <button className="btn navbar__tweet">
            <span>Tweet</span>
            <FontAwesomeIcon className="navbar__tweet__icon" icon={faFeather} />
          </button>
        </nav>
      </div>

      <div className="profile btn">
        {/* image */}
        <img className="profile__logo" src={profileLogo} alt="logo" />
        {/* Data */}
        <div className="profile__content">
          <h5>Amirhosein Ghara...</h5>
          <span>@AG_1380</span>
        </div>
        {/* icon */}
        <img className="profile__dots" src={dots} alt="more" />
      </div>
    </div>
  );
};

export default Navbar;
