import React, { useContext } from "react";
import StyledHeader from "./Styles";
import sunIcon from "../../assets/icon-sun.svg";
import moonIcon from "../../assets/icon-moon.svg";
import { ThemeContext } from "styled-components";

const Header = (props) => {
  const theme = useContext(ThemeContext);
  const icon = theme.title === "dark" ? sunIcon : moonIcon;

  return (
    <StyledHeader>
      <h1>devfinder</h1>
      <article onClick={props.click}>
        {theme.title === "light" ? "DARK" : "LIGHT"}
        <img src={icon} alt="Sun" />
      </article>
    </StyledHeader>
  );
};

export default Header;
