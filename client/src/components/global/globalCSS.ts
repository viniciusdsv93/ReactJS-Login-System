import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }

    main {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: hsl(0, 0%, 98%);
        color: hsl(234, 12%, 34%);
    }
`;
