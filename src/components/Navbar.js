const Navbar = () => {
  return (
    <header className="nav">
      <nav>
        <a className="btn" href="#home">
          <img alt="twitter-icon" />
        </a>
        <li>
          <i></i>
          <a href="#home">Home</a>
        </li>
        <li>
          <i></i>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <i></i>
          <a href="#notifications">Notifications</a>
        </li>
        <li>
          <i></i>
          <a href="#messages">Messages</a>
        </li>
        <li>
          <i></i>
          <a href="#bookmarks">Bookmarks</a>
        </li>
        <li>
          <i></i>
          <a href="#lists">Lists</a>
        </li>
        <li>
          <i></i>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <i></i>
          <a href="#more">More</a>
        </li>

        <button>Tweet</button>
      </nav>

      <div>
        {/* image */}
        <div></div>
        {/* Data */}
        <div>
          <h3>Amirhosein Gharaati</h3>
          <span>@AG_1380</span>
        </div>
        {/* icon */}
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
