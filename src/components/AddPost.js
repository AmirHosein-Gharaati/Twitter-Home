import logo from "../assets/vectors/logo.svg";
import profileLogo from "../assets/images/profile.png";

const AddPost = () => {
  return (
    <div className="add">
      <div className="add__profile">
        <img src={profileLogo} alt="profile" />
      </div>
      <div className="add__content">
        <textarea placeholder="What's happening?" />
        <div className="add__line"></div>
        <div className="add__icons-wrapper">
          <div className="add__icons">
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
          </div>
          <div className="add__button-wrapper">
            <button className="add__button btn btn-disabled">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
