import logo from "../assets/vectors/logo.svg";
import profileLogo from "../assets/images/profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faGift,
  faPoll,
  faSmile,
  faCalendar,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon icon={faImage} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faGift} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faPoll} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faSmile} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faCalendar} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faMap} />
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
