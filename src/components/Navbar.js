import logo from "../assets/vectors/logo.svg";

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

      <div>
        {/* image */}
        <div></div>
        {/* Data */}
        <div>
          <h3>Amirhosein Ghara...</h3>
          <span>@AG_1380</span>
        </div>
        {/* icon */}
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
