/** @jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import './App.css';
import { ReactComponent as ChangingImage } from './images/02.60644d3b.jpg';
import { ReactComponent as LogoIcon } from './images/spatium-white-logo.f2d215ee.svg';
import { ReactComponent as SlideShow } from './images/browser-mockup.9d688e12.svg';

const navigationStyle = css`
  font-family: 'Quicksand_300Light';
  font-size: 16px;
  font-stretch: 100%;
  color: rgb(85, 26, 139);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1128px;
  padding-top: 42px;
  //width: 586px;
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
  padding-top: 128px;
  background: linear-gradient(180deg, #e7daed, #d8bfe3);
  border: 1px solid #5c4678;
  border-top: none;
  text-align: center;
`;

const presentation = css`
  font-family: 'Quicksand';
  text-align: center;
  margin-top: 50px;
`;

const presentationH1 = css`
  font-size: 60px;
`;

const presentationH2 = css`
  font-size: 23px;
`;

const button = css`
  margin: 50px 50px;
  height: 60px;
  width: 300px;
  border-radius: 20px;
`;

const video = css`
  //display: flex;
  margin: auto;
  width: 100%;
  //text-align: center;
  animation-name: fader;
  animation-delay: 4s;
  animation-duration: 1s;
  z-index: 20;
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
            <button css={button}>Add to chrome - It's Free</button>
          </div>

          <div css={video}>
            <SlideShow />
            <div>
              <ChangingImage />
            </div>
          </div>
        </section>
        {/* <div css={features}></div> */}
      </body>
    </div>
  );
}

export default App;
