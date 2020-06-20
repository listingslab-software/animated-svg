import pJSON from '../../package.json'
import React, { useState, useEffect } from 'react'
import './style.css'
import {
    getNav,
} from './utils'
import {
    animateScrollingWorld,
    ScrollingWorld,
} from './'

console.log(`${pJSON.name} ${pJSON.version}`)
console.log(`${pJSON.description}`)

export default function AnimatedSVG(props) {
    
    const { options } = props

    let display = 'fixed' // responsive || fixed
    let width = 800
    let height = 450

    if (options){
        display = options.display
        width = options.width
        height = options.height
    }

    const [debug, setDebug] = useState(false)
    useEffect(() => {
        animateScrollingWorld(`first`, `#scrollingWorld`)    
    })
    if (!options) {
        console.warn ('You need to pass <AnimatedSVG /> an options prop')
        return null
    }
    return	<React.Fragment>

                { getNav() }
                <a href={`/`} onClick={(e) =>{ 
                    e.preventDefault()
                    setDebug(!debug)
                }}>{ !debug ? null : `Stop debugging`}</a>
                { debug ? <pre>{ JSON.stringify(options, null, 2) }</pre> : null }
                
                <div id={`animatedSVG`} 
                    className={ display === `fixed` ? `displayFixed` : `displayResponsive` }
                    style={{ 
                        width: display === `fixed` ? width : `100%`,
                        height,
                    }}>
                    <div
                        id={`scrollingWorld`}
                        style={{
                            postition: `absolute`,
                            width: 3200,
                        }}
                    >
                        <ScrollingWorld />
                    </div>       
    			</div>



            </React.Fragment>
}	