import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIDs } = props;
  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gifID={gifID} />)}
    </div>
  );
};

export default GifList;
