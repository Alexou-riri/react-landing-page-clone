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
import { ReactComponent as Hunt } from './images/featured.svg';

const navigationStyle = css`
  color: rgb(85, 26, 139);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
  padding-left: 10vw;
  padding-right: 10vw;
  background: linear-gradient(180deg, #d8bfe3, #e7daed);
  font-family: 'Quicksand';
  font-weight: 600;
`;

const menu = css`
  list-style: none;
  font-family: 'Quicksand';
  display: flex;
  text-align: center;
  gap: 20px;
  cursor: pointer;
`;

const logoIcon = css`
  cursor: pointer;
`;

const list = css`
  display: flex;
  align-items: center;
  margin-right: 32px;

  a {
    color: #76226f;
    text-decoration: none;
  }

  :hover {
    text-decoration: underline;
  }
`;

const top = css`
  padding-top: 80px;
  background: linear-gradient(180deg, #e7daed, #d8bfe3);
  text-align: center;
  z-index: 2;
`;

const presentation = css`
  font-family: 'Quicksand';
  text-align: center;
  margin-top: 40px;

  h1 {
    font-size: 60px;
    color: #391f5b;
  }

  h2 {
    color: #76226f;
  }

  span {
    font-weight: 700;
    text-decoration-style: dotted;
  }
`;

const button = css`
  margin: 50px 40px;
  height: 60px;
  width: 350px;
  border-radius: 40px;
  background: linear-gradient(
    180deg,
    rgba(179, 132, 201, 0.84),
    rgba(57, 31, 91, 0.84) 50%
  );
  box-shadow: 0 2px 2px rgb(57 31 91 / 24%), 0 8px 12px rgb(179 132 201 / 40%);
  border: none;
  color: white;
  font-family: 'Quicksand';
  //font-weight: 700;
  font-size: 20px;
  padding-left: 20px;
  cursor: pointer;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 40%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(57 31 91 / 60%), 4px 4px 16px rgb(57 31 91 / 32%);

  span {
    font-weight: 700;
  }

  :hover {
    background: linear-gradient(
      180deg,
      rgba(179, 132, 201, 0.92),
      rgba(57, 31, 91, 0.94) 50%
    );
  }
`;

const navigateur = css`
  margin-bottom: -4px;
`;
const features = css`
  background: #391f5b;
  padding-top: 180px;
  //display: flex;

  svg {
    fill: rgb(57, 31, 91);
    position: absolute;
    margin-top: -280px;
  }
`;

const titel = css`
  color: white;
  letter-spacing: 0.04em;
  text-shadow: 0 0 4px hsl(0deg 0% 100% / 30%), 0 0 12px hsl(0deg 0% 100% / 20%),
    1px 1px 4px rgb(193 28 135 / 60%), 4px 4px 16px rgb(80 77 69 / 32%);
  font-family: 'Quicksand';
  font-size: 32px;
  font-weight: 700;
`;

const animation = css`
  margin-bottom: -40px;
`;

const text = css`
  margin-right: 60px;
`;

const line1 = css`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0.4),
    rgba(179, 132, 201, 0)
  );
`;

const line2 = css`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(179, 132, 201, 0),
    rgba(179, 132, 201, 0.4)
  ); ;
`;

const emailButton = css`
  border: 1px solid #b384c9;
  border-radius: 40px;
  width: 200px;
  height: 38px;
  padding-right: 20px;
  font-family: 'quicksand';
`;

const subscribe = css`
  border: 1px solid #b384c9;
  border-radius: 40px;
  width: 120px;
  height: 38px;
  padding-right: 20px;
  font-family: 'quicksand';
  background: linear-gradient(
    rgba(255, 255, 255, 0.84) -38.04%,
    rgba(231, 218, 237, 0.84) 31.7%,
    rgba(231, 218, 237, 0.84) 51.83%,
    rgba(216, 191, 227, 0.84)
  );
  margin-left: 30px;
  cursor: pointer;
`;

const footerText = css`
  font-size: 20px;
`;

const footerTitle = css`
  font-family: 'Quicksand';
  font-weight: 700;
  font-size: 30px;
  color: white;
`;

// const googleLink = css`
//   color: white;
//   font-size: 40px;
//   text-decoration: none;
// `;

// const righty = css`
//   object-position: right center;
// `;

export default function App() {
  return (
    <div className="App">
      <header>
        <nav css={navigationStyle}>
          <LogoIcon css={logoIcon} />
          {/* faire son curseur pointer  */}
          <ul css={menu}>
            <li css={list}>
              <a href="#Features">Features</a>
            </li>
            <li css={list}>
              <Hunt />
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <section css={top}>
          <div css={presentation}>
            <h1>
              A space odyssey<br></br> awaits you.
            </h1>
            <h2>
              Beautiful space images and information of your current sky map
              location on every <span>new tab</span>.
            </h2>
            <button css={button}>
              <GoogleLogo /> <span>ADD TO CHROME-</span> IT'S FREE
            </button>
          </div>

          <div css={animation}>
            <Navigateur css={navigateur} />
            <Slideshow />
          </div>
        </section>

        <div className="Features" css={features}>
          <svg
            id="clouds"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {' '}
            <path
              d="M-5 100 Q 0 20 5 100 Z
     M0 100 Q 5 0 10 100
     M5 100 Q 10 30 15 100
     M10 100 Q 15 10 20 100
     M15 100 Q 20 30 25 100
     M20 100 Q 25 -10 30 100
     M25 100 Q 30 10 35 100
     M30 100 Q 35 30 40 100
     M35 100 Q 40 10 45 100
     M40 100 Q 45 50 50 100
     M45 100 Q 50 20 55 100
     M50 100 Q 55 40 60 100
     M55 100 Q 60 60 65 100
     M60 100 Q 65 50 70 100
     M65 100 Q 70 20 75 100
     M70 100 Q 75 45 80 100
     M75 100 Q 80 30 85 100
     M80 100 Q 85 20 90 100
     M85 100 Q 90 50 95 100
     M90 100 Q 95 25 100 100
     M95 100 Q 100 15 105 100 Z"
            ></path>{' '}
          </svg>
          <div className="feature1">
            <div className="media">
              <img src={Feature1} alt="Space images" />
            </div>
            <div>
              <h1 css={titel}>Space images.</h1>
              <p css={text}>
                Every day get a fascinating image of our universe. Enjoy
                pictures of stars, planets, moons, galaxies, nebulae, comets and
                more right on your browser tab.
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&utm_medium=space-images"
                  alt="link google"
                >
                  + Add to Chrome
                </a>
              </p>
            </div>
          </div>
          <div css={line1}></div>
          <div className="feature2">
            <div className="text">
              <h1 css={titel}>Sun Widget.</h1>
              <p>
                Find out when the sunrise, sunset, first and last light times
                will be precisely at your location. It also shows a countdown in
                an easy-to-read display, so you can stay tuned in your favorite
                sun event - light up your world!.
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&utm_medium=space-images"
                  alt="link google"
                >
                  + Add to Chrome
                </a>
              </p>
            </div>
            <div className="media">
              <img src={Feature2} alt="Sun Widget" />
            </div>
          </div>
          <div css={line2}></div>
          <div className="feature3">
            <div className="media">
              <img src={Feature3} alt="Space images" />
            </div>
            <div>
              <h1 css={titel}>Moon Widget</h1>
              <p>
                See the current moon phase in real-time, countdowns to moon
                events (New Moon, First Quarter, Full Moon and Last Quarter),
                along with exact illumination percentages. Never miss an
                opportunity for moon gazing anymore.
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&utm_medium=space-images"
                  alt="link google"
                >
                  + Add to Chrome
                </a>
              </p>
            </div>
          </div>
          <div css={line1}></div>
          <div className="feature4">
            <div>
              <h1 css={titel}>Inspire Yourself.</h1>
              <p>
                Receive a daily dose of inspiration, insight and positive action
                with our curated list of quotes from the most intelligent people
                in history.
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&utm_medium=space-images"
                  alt="link google"
                >
                  + Add to Chrome
                </a>
              </p>
            </div>

            <div className="media">
              <img src={Feature4} alt="Space images" />
            </div>
          </div>
          <div css={line2}></div>
          <div className="feature5">
            <div className="media">
              <img src={Feature5} alt="Space images" />
            </div>
            <div>
              <h1 css={titel}>Customizable INterface.</h1>
              <p>
                You can customize your experience with Spatium by showing and
                hiding widgets as per your needs. You decide what's on your New
                Tab page - it's up to you!.
              </p>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/spatium/agdllobgfmpgjedfombjgkkceedjobjb?utm_source=spatium&utm_medium=space-images"
                  alt="link google"
                >
                  + Add to Chrome
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <LogoIcon />
            <p>Made of stardust from Brazil and Canada</p>
          </div>
          <div>
            <h2 css={footerTitle}>Be the first to know. No spam.</h2>
            <p css={footerText}>
              Join us and share our passion for the universe!. Stay in the loop
              about new product updates, features and announcements.
            </p>
            <form>
              <input
                css={emailButton}
                type="email"
                name="Email"
                placeholder="Your email address"
              />
              <button css={subscribe}>Subscribe</button>
            </form>
          </div>
        </footer>
      </body>
    </div>
  );
}
