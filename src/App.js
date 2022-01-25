/** @jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import './App.css';
import { ReactComponent as LogoIcon } from './images/spatium-white-logo.f2d215ee.svg';
import { ReactComponent as GoogleLogo } from './images/chrome-logo.svg';
import { ReactComponent as Navigateur } from './images/browser-mockup.9d688e12.svg';
import 'react-slideshow-image/dist/styles.css';
import React from 'react';
// import { Fade } from 'react-slideshow-image';
import Slideshow from './Slideshow';
import Feature1 from './images/feature.386.png';
import Feature2 from './images/sun-widget.png';
import Feature3 from './images/moon-widget.png';
import Feature4 from './images/inspire.png';
import Feature5 from './images/customizable.png';

const navigationStyle = css`
  font-family: 'Quicksand_300Light';
  font-size: 16px;
  font-stretch: 100%;
  color: rgb(85, 26, 139);
  display: flex;
  align-items: center;
  justify-content: space-between;
  //max-width: 1128px;
  padding-top: 42px;
  padding-left: 170px;
  padding-right: 170px;
  //width: 586px;
  background-color: #396ecf40;
`;

const menu = css`
  list-style: none;
  font-family: 'Quicksand';
  display: flex;
  text-align: center;
  margin-right: 32px;
  gap: 20px;
  cursor: pointer;
`;

//:hover
const top = css`
  padding-top: 80px;
  background: linear-gradient(180deg, #396ecf40, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  text-align: center;
`;

const presentation = css`
  font-family: 'Quicksand';
  text-align: center;
  margin-top: 40px;
`;

const presentationH1 = css`
  font-size: 60px;
  font-family: 'Quicksand';
  font-weight: 600;
`;

const presentationH2 = css`
  font-size: 23px;
`;

const button = css`
  margin: 50px 40px;
  height: 60px;
  width: 350px;
  border-radius: 40px;
  background-color: linear-gradient(180deg, #9131c3, #391f5b);
  color: white;
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 15px;
  padding-left: 20px;
`;

const navigateur = css`
  margin: 0px;
`;
const features = css`
  background-color: #391f5b;
  padding-top: 200px;
`;

const titel = css`
  color: white;
`;

const video = css`
  /* //display: flex;
  margin: auto;
  width: 100%;
  //text-align: center;
  z-index: 20; */
  /* max-width: 100%;
  margin-bottom: -16%;
  margin-left: 16px;
  margin-right: 16px; */
`;

function App() {
  return (
    <div className="App">
      <header>
        <nav css={navigationStyle}>
          <LogoIcon />
          {/* faire son curseur pointer  */}
          <ul css={menu}>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>Add to Chrome</li>
          </ul>
        </nav>
      </header>
      <body>
        <section css={top}>
          <div css={presentation}>
            <h1 css={presentationH1}>
              A space odyssey<br></br> awaits you.
            </h1>
            <h2 css={presentationH2}>
              Beautiful space images and information of your current sky map
              location on every <strong>new tab</strong>.
            </h2>
            <button css={button}>
              <GoogleLogo /> ADD TO CHROME - IT'S FREE
            </button>
          </div>

          <div css={video}>
            <Navigateur css={navigateur} />
            <Slideshow />
          </div>
        </section>
        <div className="Features" css={features}>
          <div className="feature1">
            <div>
              <img src={Feature1} alt="Space images" />
            </div>
            <div>
              <h1>Space images.</h1>
              <p>
                Every day get a fascinating image of our universe. Enjoy
                pictures of stars, planets, moons, galaxies, nebulae, comets and
                more right on your browser tab.
              </p>
            </div>
          </div>
          <div className="feature2">
            <div>
              <img src={Feature2} alt="Sun Widget" />
            </div>
            <div>
              <h1>Sun Widget.</h1>
              <p>
                Find out when the sunrise, sunset, first and last light times
                will be precisely at your location. It also shows a countdown in
                an easy-to-read display, so you can stay tuned in your favorite
                sun event - light up your world!.
              </p>
            </div>
          </div>
          <div className="feature3">
            <div>
              <img src={Feature3} alt="Space images" />
            </div>
            <div>
              <h1>Moon Widget</h1>
              <p>
                See the current moon phase in real-time, countdowns to moon
                events (New Moon, First Quarter, Full Moon and Last Quarter),
                along with exact illumination percentages. Never miss an
                opportunity for moon gazing anymore.
              </p>
            </div>
          </div>
          <div className="feature4">
            <div>
              <img src={Feature4} alt="Space images" />
            </div>
            <div>
              <h1>Inspire Yourself.</h1>
              <p>
                Receive a daily dose of inspiration, insight and positive action
                with our curated list of quotes from the most intelligent people
                in history.
              </p>
            </div>
          </div>
          <div className="feature5">
            <div>
              <img src={Feature5} alt="Space images" />
            </div>
            <div>
              <h1>Customizable INterface.</h1>
              <p>
                You can customize your experience with Spatium by showing and
                hiding widgets as per your needs. You decide what's on your New
                Tab page - it's up to you!.
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
