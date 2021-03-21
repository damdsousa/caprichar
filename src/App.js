import coverMobile from "./cover-mobile.jpg";
import coverTablet from "./cover-tablet.jpg";
import coverDesktop from "./cover-desktop.jpg";
import coverDesktopTablet from "./cover-tablet-2.jpg";
import coverDesktopMobile from "./cover-mobile-2.jpg";
import logo from "./logo.png";

import { isMobileOnly, isMobile, isTablet } from "react-device-detect";
import "./App.css";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const Mobile = styled.img`
  width: 100%;
  height: auto;
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
`;

// const Desktop = styled.div`
//   position: fixed;
//   top: -50%;
//   left: -50%;
//   width: 200%;
//   height: 200%;
//   @media (max-height: 751px) {
//     ${'' /* max-width:100%; */}
    
//     width: 100%;
//   height: 100%;
    
//   }
// `;


const DesktopImage = styled.img`
  /* Set rules to fill background */
  min-height: 100%;
  ${'' /* min-width: 1024px; */}

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}
@media (max-width:750px)  and (min-height: 650px)  {
    visibility: hidden;
  }

@media (max-height:600px){
  ${'' /* top: -50px; */}
  height:20%;
  ${'' /* min-width: 0px; */}
}
  `

// const DesktopImage = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: auto;
//   min-width: 50%;
//   min-height: 50%;
//   z-index: -1;
//   ${'' /* @media (max-width: 950px) {
//     ${'' /* max-width:100%; */}
    
//     ${'' /* left: -10vw; */}
//   }
//   @media (max-width: 850px) {
//     ${'' /* max-width:100%; */}
    
//     ${'' /* left: -20vw; */}
//   }
//   @media (max-height: 751px) {
//     ${'' /* max-width:100%; */}
//     width:40%;
//   } */}
// `;

const Logo = styled.img`
  position: fixed;
  top: 20vh;
  left: 1vw;
  width: 45%;
  z-index: 1;

  @media (max-width: 1920px) {
    top: 27vh;
    left: 2.3vw;
    width: 45%;
  }
${'' /* 
  @media (max-width: 1400px) {
    top: 50vh;
    left: -3vw;
    width: 47%;
  } */}



  @media (max-width: 1224px)  and (min-height: 650px)  {
    top: 45vh;
    left: 0vw;
    width: 60%;
  }

  @media (max-width: 1080px)  and (min-height: 650px)  {
    top: 35.6vh;
    left: -2vw;
    width: 65%;
  }

  @media (max-width: 900px)  and (min-height: 650px)  {
    top: 32.3vh;
    left: -2vw;
    width: 65%;
  }

  @media (max-width: 800px)  and (min-height: 650px)  {
    top: 30vh;
    left: -2vw;
    width: 65%;
  }

  @media (max-width:750px) and (min-height: 600px) {
   
    top: 40vh;
    left: -2vw;
    width: 70%;

  }

  @media (max-width:650px) and (min-height: 600px) {
   
   top: 35vh;
   left: -2vw;
   width: 70%;

 }

 @media (max-width:580px) and (min-height: 600px) {
   
   top: 30vh;
   left: -2vw;
   width: 70%;

 }

  ${'' /* @media (max-height: 751px) {
    max-width:100%;
    top: 20vh;
    width:47%;
  } */}

`;

const DesktopTabletImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;

  width:100%;
  visibility: hidden;
  ${'' /* min-width: 50%;
  min-height: 50%;
  z-index: -2; */}

 

  @media (min-width: 750px) and (max-width:1224px) and (min-height: 650px)  {
    visibility: visible;

  }

`

const DesktopMobileImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  visibility: hidden;
  ${'' /* min-width: 50%;
  min-height: 50%;
  z-index: -2; */}


  @media (max-width:750px) and (min-height: 600px) {
    visibility: visible;
  }

  @media (max-width:550px) and (min-height: 600px) {
    visibility: visible;
    height:100%;
  }
`
  
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Caprichar</title>
        <meta name="description" content="Pure, Simple & Precious" />
      </Helmet>
      {isMobileOnly && <Mobile src={coverMobile} alt="cover mobile" />}
      {isTablet && <Mobile src={coverTablet} alt="cover tablet" />}
      {!isMobile && (
        <>
        {/* <Desktop> */}
          <DesktopImage src={coverDesktop} alt="cover desktop" />{" "}
          
          <Logo src={logo} alt="logo" />{" "}
          
        {/* </Desktop> */}
        <DesktopTabletImage src={coverDesktopTablet} alt="cover desktop tablet" />{" "}
        <DesktopMobileImage src={coverDesktopMobile} alt="cover desktop mobile" />{" "}
        </>
      )}

      {/* { isMobileOnly ? <img src={coverMobile} alt="cover mobile" /> : isTablet ? <img src={coverTablet} alt="cover tablet" /> : <img id="desktop" src={coverDesktop} alt="cover desktop" />} */}
      {/* { isMobileOnly ? <img src={coverMobile} alt="cover mobile" /> : isTablet ? <img src={coverTablet} alt="cover tablet" /> : <div id="desktop"></div>} */}
    </div>
  );
}

export default App;
