import React from "react"

const Export = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g transform="translate(25 8.604)">
    <rect width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <path d="M39.316,24.054V0H4.212A4.219,4.219,0,0,0,0,4.245V86.312a4.219,4.219,0,0,0,4.212,4.245H63.186A4.219,4.219,0,0,0,67.4,86.312V28.3H43.528A4.241,4.241,0,0,1,39.316,24.054ZM52.734,61.437,35.811,78.363a2.976,2.976,0,0,1-4.219,0L14.668,61.437A2.832,2.832,0,0,1,16.643,56.6h11.44V42.448a2.818,2.818,0,0,1,2.808-2.83h5.617a2.818,2.818,0,0,1,2.808,2.83V56.6h11.44A2.833,2.833,0,0,1,52.734,61.437ZM66.17,18.571,48.987,1.238A4.193,4.193,0,0,0,46,0H44.932V22.639H67.4V21.56A4.248,4.248,0,0,0,66.17,18.571Z" transform="translate(-9 -3.604)" fill={c}/>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Export
