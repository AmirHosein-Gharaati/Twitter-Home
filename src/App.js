import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <Navbar />

      <div className="main">
        <Home />

        {/* Right Side */}
        <div className="right-side">
          <div className="right-side__search-wrapper">
            <div className="search">
              <input placeholder="Search Twitter" />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <div className="search__results">
                <span>Try searching for people, topics, or keywords</span>

                <div className="search__results__item">
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
                </div>

                <div className="search__results__item">
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
                </div>

                <div className="search__results__item">
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
                </div>
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
                    UN Human Rights Council votes to investigate 'Russian
                    aggression against Ukraine'
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
                    UN Human Rights Council votes to investigate 'Russian
                    aggression against Ukraine'
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
                    UN Human Rights Council votes to investigate 'Russian
                    aggression against Ukraine'
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
                    UN Human Rights Council votes to investigate 'Russian
                    aggression against Ukraine'
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
      </div>
    </div>
  );
}

export default App;
