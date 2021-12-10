import React from 'react';

const Gif = (props) => {
  const { gifID, setSelectedGif } = props;
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  const handleClick = () => {
    setSelectedGif(gifID);
  };
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick}/>
  );
};

export default Gif;
