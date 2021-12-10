import React from 'react';

const SearchBar = (props) => {
  const { searchGif } = props;
  return (
    <input type="text" className="form-search form-control" onChange={searchGif} />
  );
};

export default SearchBar;
