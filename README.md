# Animated SVG

![Listingslab's WordPress Plugin](https://raw.githubusercontent.com/listingslab-software/listingslab/develop/listingslab/public/svg/headers/listingslab-plugin.svg)

> Solid framework for creating Animated Scalable Vector graphics to use in any JavaScript App

```
/*
	Simply copy the entire AnimatedSVG directory to 
	your project, import it and render it
	Should **just work** &trade;
*/


import React from 'react'
import ReactDOM from 'react-dom'
import {AnimatedSVG} from './AnimatedSVG'

ReactDOM.render(<AnimatedSVG 
      options={{
      	display: 'fixed', // responsive || fixed
        width: 800,
        height: 450,
      }}/>,
  document.getElementById('animated-svg')
)

```
