import React from 'react';

const Gif = (props) => {
  const { gifID } = props;
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  return (
    <img src={url} alt="gif" className="gif" />
  );
};

export default Gif;
