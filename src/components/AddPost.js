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
import { useState } from "react";

const AddPost = ({ data, setData }) => {
  const [value, setValue] = useState("");

  const buttonClasses = () => {
    let result = " add__button btn ";
    if (!value) result += " btn-disabled ";
    return result;
  };

  const addData = () => {
    if (!value) return;

    setData([
      {
        text: value,
      },
      ...data,
    ]);
  };

  return (
    <div className="add">
      <div className="add__profile">
        <img src={profileLogo} alt="profile" />
      </div>
      <div className="add__content">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What's happening?"
        />
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
            <button
              onClick={addData}
              disabled={buttonClasses().includes("btn-disabled")}
              className={buttonClasses()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
