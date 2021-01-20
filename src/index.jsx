import React from 'react'
import ReactDOM from 'react-dom'
import {AnimatedSVG} from './AnimatedSVG'

ReactDOM.render(<AnimatedSVG 
      options={{
      	display: 'fixed', // responsive || fixed
        width: 1280,
        height: 720,
      }}/>,
  document.getElementById('animated-svg')
)
