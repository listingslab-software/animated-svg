import React from "react"

const Tick = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100">
                <g fill="none" stroke={c} strokeWidth="4">
                    <circle cx="50" cy="50" r="50" stroke="none"/>
                    <circle cx="50" cy="50" r="48" fill="none"/>
                </g>
                <path d="M678,268.313l20.129,16.564L723,247" transform="translate(-651 -212)" fill="none" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="15"/>
            </svg>
        </React.Fragment>
}
export default Tick
