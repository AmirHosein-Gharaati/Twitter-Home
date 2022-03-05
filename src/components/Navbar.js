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
              <FontAwesomeIcon icon={faHome} />
              <span className="navbar__item__text">home</span>
            </a>
          </li>

          <li>
            <a href="#explore" className="navbar__item  btn">
              <FontAwesomeIcon icon={faHashtag} />
              <span className="navbar__item__text">explore</span>
            </a>
          </li>

          <li>
            <a href="#notifications" className="navbar__item  btn">
              <FontAwesomeIcon icon={faBell} />
              <span className="navbar__item__text">notifications</span>
            </a>
          </li>

          <li>
            <a href="#messages" className="navbar__item  btn">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="navbar__item__text">messages</span>
            </a>
          </li>

          <li>
            <a href="#bookmarks" className="navbar__item  btn">
              <FontAwesomeIcon icon={faNoteSticky} />
              <span className="navbar__item__text">bookmarks</span>
            </a>
          </li>

          <li>
            <a href="#lists" className="navbar__item  btn">
              <FontAwesomeIcon icon={faList} />
              <span className="navbar__item__text">lists</span>
            </a>
          </li>

          <li>
            <a href="#profile" className="navbar__item  btn">
              <FontAwesomeIcon icon={faPerson} />
              <span className="navbar__item__text">profile</span>
            </a>
          </li>

          <li>
            <a href="#more" className="navbar__item  btn">
              <FontAwesomeIcon icon={faDotCircle} />
              <span className="navbar__item__text">more</span>
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
