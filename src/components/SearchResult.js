const SearchResult = ({ image, personName, personId, personBio }) => {
  return (
    <div className="search__results__item">
      <div className="search__results__item__image">
        <img src={image} alt="" />
      </div>
      <div className="search__results__item__content">
        <h4>{personName}</h4>
        <span>{personId}</span>
        <span>{personBio}</span>
      </div>
    </div>
  );
};

export default SearchResult;
