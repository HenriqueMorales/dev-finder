import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;
        list-style: none;
    }

    body {
        background: ${({ theme }) => theme.colors.backgroundColor};
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        padding: 16px;

        & > div {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
        }
    }
    
`;
