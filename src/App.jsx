/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import logo from './logo.svg';
import './App.css';
import Moo from 'aovens-coursera-emotion-test-lib/dist/Moo.js';

const moo = css({
  fontWeight: 600
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Moo css={moo} />
      </header>
    </div>
  );
}

export default App;
