import React from "react"

const Timeline = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100">
                <g transform="translate(0 8.5)">
                    <g id="rect" transform="translate(0 -8.5)" fill="none" stroke="none" strokeWidth="1" opacity="0">
                        <rect width="100" height="100" stroke="none"/>
                        <rect x="0.5" y="0.5" width="99" height="99" fill="none"/>
                    </g>
                    <g transform="translate(0 -0.5)">
                        <g>
                            <path d="M98.684-13.447H59.474a1.243,1.243,0,0,0-1.316,1.316v8.684H51.316V-18.184A1.243,1.243,0,0,0,50-19.5a1.243,1.243,0,0,0-1.316,1.316v60h-10V33.132a1.243,1.243,0,0,0-1.316-1.316H1.316A1.243,1.243,0,0,0,0,33.132v20a1.243,1.243,0,0,0,1.316,1.316H37.368a1.243,1.243,0,0,0,1.316-1.316V44.447h10V62.342a1.316,1.316,0,1,0,2.632,0V-.816h6.842V7.868a1.243,1.243,0,0,0,1.316,1.316H98.684A1.243,1.243,0,0,0,100,7.868v-20A1.41,1.41,0,0,0,98.684-13.447ZM36.053,51.816H2.632V34.447H36.053ZM97.368,6.553H60.789V-10.816H97.368Z" transform="translate(0 19.5)" fill={c}/>
                        </g>
                    </g>
                </g>
            </svg>

        </React.Fragment>
}
export default Timeline
