import React, { useState } from "react";
import StyledSearch from "./Styles";
import searchIcon from "../../assets/icon-search.svg";

const Search = ({ fetchUser }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue((prevValue) => value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(inputValue);
  };

  return (
    <StyledSearch onSubmit={handleSubmit}>
      <div>
        <img src={searchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Search</button>
    </StyledSearch>
  );
};

export default Search;
