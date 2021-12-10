import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("WuGSL4LFUMQU");
  const gifListIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq",
    'gG6OcTSRWaSis', '13HgwGsXF0aiGY', '13UZisxBxkjPwI', 'zOvBKUUEERdNm',
    'PnpkimJ5mrZRe', 'LmNwrBhejkK9EFP504', '5ntdy5Ban1dIY', 'ZG719ozZxGuThHBckn',
    'TilmLMmWrRYYHjLfub', 'kHrKpJiCbOmkWD4xT9'];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
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
