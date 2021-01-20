import React from 'react'
import ReactDOM from 'react-dom'
/*
	Simply copy the entire AnimatedSVG directory to 
	your project, import it and render it
	Should **just work** &trade;
*/
import {AnimatedSVG} from './AnimatedSVG'

ReactDOM.render(<AnimatedSVG 
      options={{
      	display: 'fixed', // responsive || fixed
        width: 800,
        height: 450,
      }}/>,
  document.getElementById('animated-svg')
)
