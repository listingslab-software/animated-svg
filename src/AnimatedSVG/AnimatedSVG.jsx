import pJSON from '../../package.json'
import React, {useEffect, useState} from 'react'
import './other/animated-svg.css'
import {
    getNav,
} from './other/utils'

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
    	// console.log ('useEffect')
    })

    if (!options) {
        console.warn ('You need to pass <AnimatedSVG /> an options prop')
        return null
    }
    return	<div className={`animatedSVG`}>
                <div style={{ 
                        width: display === `fixed` ? width : `100%`,
                        height,
                    }}
                    className={ display === `fixed` ? `displayFixed` : `displayResponsive` }>
                </div>
                { getNav() }
                <a href={`/`} onClick={(e) =>{ 
                    e.preventDefault()
                    setDebug(!debug)
                }}>{ !debug ? null : `Stop debugging`}</a>
                { debug ? <pre>{ JSON.stringify(options, null, 2) }</pre> : null }
			</div>
}	