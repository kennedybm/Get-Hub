import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing: border-box;
        vertical-align: baseline;
        font-size: 100%;
    }
:root{
    --default: #0d1017;
    --decor: #161a22;

    --details: #33373f;
    --details1: #686868;
    --font: #a9afb9;
    --title: #3c577a;

    --text: 'Montserrat', sans-serif;
    --content: 'Merriweather', serif;

    --fs-tt: clamp(1rem, 7vw, 2.3rem);
    --fs-xl: clamp(1.9rem, 6vw, 2.5rem);
    --fs-xm: 1.9rem;
    --fs-lrg: 1.8rem;
    --fs-mid: 1.2rem;
    --fs-sml: 0.9rem;
    --fs-xs: 0.6rem;
}
body{
    background-color: var(--default);
    &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray3);
    border-radius: 3px;
  }
}
a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;
