import React from "react"

const Activity = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g transform="translate(25 8.604)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <g id="run_f" transform="translate(-18.655 -5.097)">
      <path id="Path_339" data-name="Path 339" d="M30,12.086a8.938,8.938,0,1,0,17.873,0,8.938,8.938,0,1,0-17.873,0Z" transform="translate(24.647)" fill={c}/>
      <path id="Path_340" data-name="Path 340" d="M54.42,53.368,43.692,43.7,52.966,25.05l-2.812-8.567-4.979-2.817-16.215-3.6-3.243.517L11.958,20.625l4.629,6.531,11.9-8.7,8.756,2.827-9.8,16.241,2.8,11.885,15.065,9.452L41.927,76.6l9.747,1.923L55.7,56.967Z" transform="translate(6.86 7.205)" fill={c}/>
      <circle id="Ellipse_160" data-name="Ellipse 160" cx="4.5" cy="4.5" r="4.5" transform="translate(48.655 80.494)" fill={c}/>
      <ellipse id="Ellipse_161" data-name="Ellipse 161" cx="3.5" cy="5" rx="3.5" ry="5" transform="translate(16.655 26.494)" fill={c}/>
      <ellipse id="Ellipse_162" data-name="Ellipse 162" cx="4" cy="5" rx="4" ry="5" transform="translate(30.655 16.494)" fill={c}/>
      <ellipse id="Ellipse_163" data-name="Ellipse 163" cx="6" cy="6.5" rx="6" ry="6.5" transform="translate(48.655 23.494)" fill={c}/>
      <circle id="Ellipse_164" data-name="Ellipse 164" cx="3.5" cy="3.5" r="3.5" transform="translate(55.655 60.494)" fill={c}/>
      <ellipse id="Ellipse_165" data-name="Ellipse 165" cx="7.5" cy="9" rx="7.5" ry="9" transform="translate(33.655 40.494)" fill={c}/>
      <path id="Path_341" data-name="Path 341" d="M51.886,27.34H39.971l-3.549-8.6-4.45,8.945,2.4,5.384.024.016a3.963,3.963,0,0,0,3.588,2.331h13.9a4.04,4.04,0,0,0,0-8.078Z" transform="translate(26.591 16.051)" fill={c}/>
      <path id="Path_342" data-name="Path 342" d="M34.883,34.046a12.054,12.054,0,0,1-5.024-5.631l-4.52,7.24H9.965a5.05,5.05,0,0,0,0,10.1H26.71a7.907,7.907,0,0,0,6.482-3.407l4.538-6.511C36.087,34.8,34.9,34.056,34.883,34.046Z" transform="translate(0 25.912)" fill={c}/>
    </g>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Activity
