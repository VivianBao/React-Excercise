import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'djCc5s07oU5OOyKdwwLaxiEgf6XaOb5l',
  https: true
});

const App = () => {
  const [selectedGif, setSelectedGif] = useState("WuGSL4LFUMQU");
  const [gifListIDs, setGifListIDs] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq",
    'gG6OcTSRWaSis', '13HgwGsXF0aiGY', '13UZisxBxkjPwI', 'zOvBKUUEERdNm',
    'PnpkimJ5mrZRe', 'LmNwrBhejkK9EFP504', '5ntdy5Ban1dIY', 'ZG719ozZxGuThHBckn',
    'TilmLMmWrRYYHjLfub', 'kHrKpJiCbOmkWD4xT9']);

  const searchGif = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifListIDs(gifIdArray);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGif={searchGif} />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifListIDs} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
