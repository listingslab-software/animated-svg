import React from 'react'

const ScrollingWorld = props => {
    const { color } = props
    let c = `#000`
    if (color) {
        c = color
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 496 484" >

            </svg>
        </React.Fragment>
    )
}

export default ScrollingWorld
