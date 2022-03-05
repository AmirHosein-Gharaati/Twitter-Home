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
      <div className="navbar-wrapper">
        <button className="btn nav__icon" href="#home">
          <img src={logo} alt="twitter-icon" />
        </button>

        <nav className="navbar">
          <li>
            <a href="#home" className="navbar__item navbar__active btn">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>

          <li>
            <a href="#explore" className="navbar__item  btn">
              <FontAwesomeIcon icon={faHashtag} /> explore
            </a>
          </li>

          <li>
            <a href="#notifications" className="navbar__item  btn">
              <FontAwesomeIcon icon={faBell} /> notifications
            </a>
          </li>

          <li>
            <a href="#messages" className="navbar__item  btn">
              <FontAwesomeIcon icon={faEnvelope} /> messages
            </a>
          </li>

          <li>
            <a href="#bookmarks" className="navbar__item  btn">
              <FontAwesomeIcon icon={faNoteSticky} /> bookmarks
            </a>
          </li>

          <li>
            <a href="#lists" className="navbar__item  btn">
              <FontAwesomeIcon icon={faList} /> lists
            </a>
          </li>

          <li>
            <a href="#profile" className="navbar__item  btn">
              <FontAwesomeIcon icon={faPerson} /> profile
            </a>
          </li>

          <li>
            <a href="#more" className="navbar__item  btn">
              <FontAwesomeIcon icon={faDotCircle} /> more
            </a>
          </li>

          <button className="btn navbar__tweet">
            <span>Tweet</span>
            <FontAwesomeIcon className="navbar__tweet__icon" icon={faFeather} />
          </button>
        </nav>
      </div>

      <div className="profile btn">
        <img className="profile__logo" src={profileLogo} alt="logo" />
        <div className="profile__content">
          <h5>Amirhosein Ghara...</h5>
          <span>@AG_1380</span>
        </div>
        <img className="profile__dots" src={dots} alt="more" />
      </div>
    </div>
  );
};

export default Navbar;
