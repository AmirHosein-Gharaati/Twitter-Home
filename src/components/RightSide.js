import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const RightSide = ({ dummyData }) => {
  const defaultText = "Try searching for people, topics, or keywords";
  const notFoundText = "Nothing found";

  const [results, setResults] = useState([]);
  const [serachInput, setSearchInput] = useState("");

  return (
    <div className="right-side">
      <div className="right-side__search-wrapper">
        <div className="search">
          <input
            value={serachInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Twitter"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div className="search__results">
            <span>
              {serachInput ? (results.length ? "" : notFoundText) : defaultText}
            </span>

            {/* <div className="search__results__item">
              <div className="search__results__item__image">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt=""
                />
              </div>
              <div className="search__results__item__content">
                <h4>Mohsen Tahmasebi</h4>
                <span>@mohsen</span>
                <span>IT nerd, Data miner, Social Researcher</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="right-side__content">
        <div className="right-side__box">
          <h2 className="right-side__box__title">What's happening</h2>

          <div className="right-side__item">
            <div className="right-side__item__content">
              <span className="right-side__item__title">
                Ukraine conflict · LIVE
              </span>
              <p>
                UN Human Rights Council votes to investigate 'Russian aggression
                against Ukraine'
              </p>
            </div>
            <div className="right-side__item__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="right-side__item">
            <div className="right-side__item__content">
              <span className="right-side__item__title">
                Ukraine conflict · LIVE
              </span>
              <p>
                UN Human Rights Council votes to investigate 'Russian aggression
                against Ukraine'
              </p>
            </div>
            <div className="right-side__item__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="right-side__box">
          <h2 className="right-side__box__title">What's happening</h2>

          <div className="right-side__item">
            <div className="right-side__item__content">
              <span className="right-side__item__title">
                Ukraine conflict · LIVE
              </span>
              <p>
                UN Human Rights Council votes to investigate 'Russian aggression
                against Ukraine'
              </p>
            </div>
            <div className="right-side__item__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="right-side__item">
            <div className="right-side__item__content">
              <span className="right-side__item__title">
                Ukraine conflict · LIVE
              </span>
              <p>
                UN Human Rights Council votes to investigate 'Russian aggression
                against Ukraine'
              </p>
            </div>
            <div className="right-side__item__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
