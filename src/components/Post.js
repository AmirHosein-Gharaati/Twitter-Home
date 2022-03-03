import {
  faHeart,
  faComment,
  faRetweet,
  faShare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({
  reasonFromPerson,
  reason="",
  personImage,
  personName,
  personId,
  time,
  text,
  imageUrl = "",
  replyCount = 0,
  retweetCount = 0,
  likeCount = 0,
  shareCount = 0,
  hasComment = false,
}) => {
  return (
    <div className="post">
      <div className="post-wrapper">
        {reason && reasonFromPerson && (
          <div className="post__reason">
            <FontAwesomeIcon icon={faComment} />
            <span className="post__reason__person">{reasonFromPerson}</span>
            <span className="post__reason__action">{reason}</span>
          </div>
        )}

        <div className="post__main">
          <div className="post__profile">
            <img src={personImage} alt="profile" />
          </div>
          <div
            className={
              hasComment
                ? "post__content"
                : "post__content post__content__hide-line"
            }
          >
            <div className="post__info-wrapper">
              <div className="post__info">
                <h4>{personName}</h4>
                <span className="post__info__id">{personId} . </span>
                <span className="post__info__time">{time}</span>
              </div>
              <button className="btn">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <div className="post__text">
              <p>{text}</p>
            </div>

            {imageUrl !== "" && (
              <div className="post__image">
                <img src={imageUrl} alt="logo" />
              </div>
            )}

            <div className="post__buttons">
              <div className="post__buttons-wrapper">
                <button className="btn">
                  <FontAwesomeIcon icon={faComment} />
                </button>
                {replyCount !== 0 && <span>{replyCount}</span>}
              </div>

              <div className="post__buttons-wrapper">
                <button className="btn">
                  <FontAwesomeIcon icon={faRetweet} />
                </button>
                {retweetCount !== 0 && <span>{retweetCount}</span>}
              </div>

              <div className="post__buttons-wrapper">
                <button className="btn">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                {likeCount !== 0 && <span>{likeCount}</span>}
              </div>

              <div className="post__buttons-wrapper">
                <button className="btn">
                  <FontAwesomeIcon icon={faShare} />
                </button>
                {shareCount !== 0 && <span>{shareCount}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasComment === false && <div className="post__end"></div>}
    </div>
  );
};

export default Post;
