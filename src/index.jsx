import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

/*
	Simply copy the entire AnimatedSVG directory to 
	your project, import it and render it
	Should **just work** &trade;
*/
import {AnimatedSVG} from './AnimatedSVG'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AnimatedSVG options={{
    	display: 'fixed', // || responsive
      height: 200,
    	width: 600,
    }} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
