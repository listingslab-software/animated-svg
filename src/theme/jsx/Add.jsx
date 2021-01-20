import React from "react"

const Add = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }
    c = `rgba(255,255,255,0.4)`

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g transform="translate(25 8.604)">
    <rect width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <g transform="translate(-19 -3.604)" fill={c} stroke="none" strokeWidth="2">
      <circle cx="44" cy="44" r="44" stroke="none"/>
      <circle cx="44" cy="44" r="43" fill="none"/>
    </g>
    <line x2="15.429" y2="15.429" transform="translate(14.27 39.83) rotate(-45)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="5"/>
    <line x1="15.429" y2="15.429" transform="translate(14.27 39.83) rotate(-45)" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="5"/>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Add
