/** @jsxImportSource @emotion/react*/
import { css } from '@emotion/react';
import './App.css';
import { ReactComponent as LogoIcon } from './images/spatium-white-logo.f2d215ee.svg';

const navigationStyle = css`
  font-family: 'Quicksand_300Light';
  font-size: 16px;
  font-stretch: 100%;
  font-weight: 400;
  line-height: 16px;
  color: rgb(85, 26, 139);
`;

function App() {
  return (
    <div className="App">
      <header>
        <nav style={navigationStyle}>
          <LogoIcon />
          <ul>
            <li>Features</li>
            <li>Add to Chrome</li>
          </ul>
        </nav>
      </header>
      <body></body>
    </div>
  );
}

export default App;
