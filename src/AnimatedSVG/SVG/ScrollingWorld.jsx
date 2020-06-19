import React from 'react'

const ScrollingWorld = props => {
    // const { color } = props
    // let c = `#000`
    // if (color) {
    //     c = color
    // }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 800 450" >
    <defs>
        <radialGradient cx="49.2773438%" cy="48.8420139%" fx="49.2773438%" fy="48.8420139%" r="45.3689236%" gradientTransform="translate(0.492773,0.488420),scale(0.562500,1.000000),rotate(90.000000),translate(-0.492773,-0.488420)" id="radialGradient-1">
            <stop stop-color="#2FD846" offset="0%"></stop>
            <stop stop-color="#319B39" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g id="AnimatedSVG" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ScrollingWorld" fill="url(#radialGradient-1)">
            <rect id="greenscreen" x="0" y="0" width="800" height="450"></rect>
        </g>
    </g>
            </svg>
        </React.Fragment>
    )
}

export default ScrollingWorld
