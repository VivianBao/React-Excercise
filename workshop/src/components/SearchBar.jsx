import React from 'react';

const SearchBar = (props) => {
  const { searchGif } = props;
  const handleChange = (event) => {
    searchGif(event.currentTarget.value);
  };
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBar;
