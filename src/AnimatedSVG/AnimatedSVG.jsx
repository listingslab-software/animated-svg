import React, {useEffect, useState} from 'react'
import './animated-svg.css'
import {
    getNav,
} from './utils'

export default function AnimatedSVG(props) {

    const [debug, setDebug] = useState(false)

	useEffect(() => {
    	// console.log ('useEffect')
    })

	const { options } = props
	if (!options){
		console.log ('You need to pass <AnimatedSVG /> an options prop')
		return null
	}

    return	<div className={`animatedSVG`}>

                {getNav()}

    			<a href={`/`} onClick={(e) =>{
                    e.preventDefault()
                    setDebug(!debug)
                }}>
                    { !debug ? null : `Stop debugging`}
                </a>

                {debug ? <React.Fragment>
                            <pre>
                                { JSON.stringify(options, null, 2) }
                            </pre>
                        </React.Fragment> : null }

                <div className={`stuff`}>
                    stuff
                </div>

			</div>

}	