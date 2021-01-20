import React from "react"

const Google = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Google">
                        <rect fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="100" height="100"></rect>
                        <g transform="translate(8.000000, 8.000000)" fill={c} fillRule="nonzero">
                            <path d="M83.3528505,39.585 L43.7904468,39.585 L43.7904468,51.4605 L71.8767334,51.4605 C70.4530046,68.034 56.7765794,75.1245 43.8335901,75.1245 C27.3097072,75.1245 12.8135593,61.9875 12.8135593,43.5 C12.8135593,25.665 26.6194145,11.8755 43.8767334,11.8755 C57.2080123,11.8755 65.0169492,20.445 65.0169492,20.445 L73.2141757,11.832 C73.2141757,11.832 62.6872111,0 43.4453005,0 C18.9399076,0 0,20.88 0,43.5 C0,65.4675 17.8181818,87 44.0924499,87 C67.174114,87 84,71.0355 84,47.4585 C84,42.456 83.3528505,39.585 83.3528505,39.585 L83.3528505,39.585 Z"></path>
                        </g>
                    </g>
                </g>

            </svg>
        </React.Fragment>
}
export default Google
