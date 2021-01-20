import React from "react"

const Documents = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >
                
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Documents">
                        <rect id="bg" fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="100" height="100"></rect>
                        <path d="M59.4244643,39.3151316 L39.7816071,19.5782895 L39.2060714,19 L5,19 L5,94 L60,94 L60,39.8934211 L59.4244643,39.3151316 Z M17,62 L41,62 L41,66 L17,66 L17,62 Z M48,78 L17,78 L17,74 L48,74 L48,78 Z M48,55 L17,55 L17,51 L48,51 L48,55 Z M38,41 L38,24 L55,41 L38,41 Z" id="Path_328" fill={c} fillRule="nonzero"></path>
                        <path d="M95.4244643,23.3151316 L95.4244643,23.3151316 L75.7816071,3.57828947 L75.7816071,3.57828947 L75.2060714,3 L41,3 L41,14.3644737 L61.1083929,34.7644737 L61.1182143,34.5789474 L84.2142857,34.5789474 L84.2142857,38.5263158 L64.5714286,38.5263158 L64.5714286,46.4210526 L76.3571429,46.4210526 L76.3571429,50.3684211 L64.5714286,50.3684211 L64.5714286,58.2631579 L84.2142857,58.2631579 L84.2142857,62.2105263 L64.5714286,62.2105263 L64.5714286,78 L96,78 L96,23.8934211 L95.4244643,23.3151316 Z M74,25 L74,8 L91,25 L74,25 Z" fill={c} fillRule="nonzero"></path>
                    </g>
                </g>
                
            </svg>
        </React.Fragment>
}
export default Documents
