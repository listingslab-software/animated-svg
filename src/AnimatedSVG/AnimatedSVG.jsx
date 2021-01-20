import pJSON from '../../package.json'
import React from 'react'
import {
    animateScrollingWorld,
    ScrollingWorld,
} from './'

console.log(`${pJSON.name} ${pJSON.version}`)

export default function AnimatedSVG(props) {
    
    const { options } = props
    React.useEffect(() => {
        animateScrollingWorld(`first`, `#scrollingWorld`)    
    }, [options])
    if (!options) return null

    const {
        display,
        width,
        height,
    } = options

    return	<React.Fragment>
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
