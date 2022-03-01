import logo from "../assets/vectors/logo.svg";
import profileLogo from "../assets/images/profile.png";
import dots from "../assets/images/dots.png";

const Navbar = () => {
  return (
    <header className="nav">
      <nav className="navbar">
        <button className="btn navbar__icon" href="#home">
          <img src={logo} alt="twitter-icon" />
        </button>

        <li>
          <div className="navbar__item navbar__active btn">
            <img src={logo} alt="logo" />
            <a href="#home">Home</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#explore">explore</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#notifications">notifications</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#messages">messages</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#bookmarks">bookmarks</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#lists">lists</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#profile">profile</a>
          </div>
        </li>

        <li>
          <div className="navbar__item btn">
            <img src={logo} alt="logo" />
            <a href="#more">more</a>
          </div>
        </li>

        <button className="btn navbar__tweet">Tweet</button>
      </nav>

      <div className="profile btn">
        {/* image */}
        <img className="profile__logo" src={profileLogo} />
        {/* Data */}
        <div className="profile__content">
          <h5>Amirhosein Ghara...</h5>
          <span>@AG_1380</span>
        </div>
        {/* icon */}
        <img className="profile__dots" src={dots} alt="more" />
      </div>
    </header>
  );
};

export default Navbar;
