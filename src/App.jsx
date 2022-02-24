import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? dark : light
  );

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  const [userData, setUserData] = useState("");

  const fetchUser = async (user) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserData((prevValue) => data);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUser("octocat");
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header click={toggleTheme} />
          <Search fetchUser={fetchUser} />
          <Main userData={userData} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
