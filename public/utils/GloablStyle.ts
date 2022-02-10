import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: "din_regular";
      src: url('../assets/fonts/din_regular.otf');
    }
    
    @font-face {
      font-family: "din_medium";
      src: url('../assets/fonts/din_medium.otf');
    }
    
    @font-face {
      font-family: "din_bold";
      src: url('../assets/fonts/din_bold.otf');
    }
    
    *{
      padding: 0;
      margin: 0;
      font-family: "din_regular";
    }
    body,html{
      background: #fff;
      color: #666666;
    }
    ul,li{
        list-style: none;
         padding: 0;
        margin: 0;
    }
    .btn-flat {
      background-color: purple;
      color: white;
    
      &:focus{
        outline: none;
      }
      &:hover{
        background: #000;
        color: white;
      }
    }
    .spinner-primary{
    color: purple;
    }
  .form-check-input{
      &:checked{
        background-color: purple;
        border-color: purple;
      &:focus{
        outline: none;
        border-color: #ccc;
      }
  }
    

`;
export default GlobalStyle
