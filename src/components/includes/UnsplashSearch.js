import React, { useRef } from "react";

function UnsplashSearch({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="Unsplash__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
}

export default UnsplashSearch;
