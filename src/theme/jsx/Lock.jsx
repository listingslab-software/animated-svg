import React from "react"

const Lock = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100">
                <g transform="translate(-172 -288)">
                    <g transform="translate(172 288)" fill="none" stroke={c} strokeWidth="4">
                        <circle cx="50" cy="50" r="50" stroke="none"/>
                        <circle cx="50" cy="50" r="48" fill="none"/>
                    </g>
                    <path d="M45.981,25.752H43.224V17.473a17.474,17.474,0,1,0-34.947,0v8.279H5.519A5.519,5.519,0,0,0,0,31.268V53.339a5.519,5.519,0,0,0,5.519,5.519H45.981A5.519,5.519,0,0,0,51.5,53.339V31.268A5.519,5.519,0,0,0,45.981,25.752Zm-11.956,0H17.472V17.473a8.276,8.276,0,1,1,16.553,0Z" transform="translate(196 306.142)" fill={c}/>
                </g>
            </svg>
        </React.Fragment>
}
export default Lock
