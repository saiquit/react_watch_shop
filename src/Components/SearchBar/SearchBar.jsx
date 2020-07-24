import React from "react";
import "./searchbar.scss";
function SearchBar({ toggleSearchBar }) {
  return (
    <div className="search_bar">
      <p onClick={toggleSearchBar}>X</p>
      <input type="search" name="search" placeholder="Search Your Product" />
    </div>
  );
}

export default SearchBar;
