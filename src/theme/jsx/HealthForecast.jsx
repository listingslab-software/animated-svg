import React from "react"

const HealthForecast = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g id="HealthForecast" transform="translate(25 8.604)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <g id="HealthForecastGraph" transform="translate(-11921 -420.604)">
      <circle id="Ellipse_139"  fill={c} cx="4" cy="4" r="4" transform="translate(11977 462)"/>
      <circle id="Ellipse_140"  fill={c} cx="2.5" cy="2.5" r="2.5" transform="translate(11929 472)"/>
      <circle id="Ellipse_141"  fill={c} cx="2" cy="2" r="2" transform="translate(11909 452)"/>
      <ellipse id="Ellipse_142"  fill={c} cx="1.5" cy="1" rx="1.5" ry="1" transform="translate(11899 462)"/>
      <ellipse id="Ellipse_143"  fill={c} cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(11950 456)"/>
      <circle id="Ellipse_144"  fill={c} cx="1.5" cy="1.5" r="1.5" transform="translate(11990 443)"/>
      <path id="Line_103" data-name="Line 103" d="M0,9.463,10.365,0" transform="translate(11900.577 454.041)" fill="none" stroke={c} strokeWidth="1"/>
      <path id="Line_104" data-name="Line 104" d="M20.279,20.279,0,0" transform="translate(11910.942 454.041)" fill="none" stroke={c} strokeWidth="1"/>
      <path id="Line_105" data-name="Line 105" d="M20.729,0,0,16.674" transform="translate(11931.221 457.646)" fill="none" stroke={c} strokeWidth="1"/>
      <path id="Line_106" data-name="Line 106" d="M28.841,8.112,0,0" transform="translate(11951.95 457.646)" fill="none" stroke={c} strokeWidth="1"/>
      <path id="Line_107" data-name="Line 107" d="M10.815,0,0,21.631" transform="translate(11980.791 444.127)" fill="none" stroke={c} strokeWidth="1"/>
    </g>
  </g>
                
            </svg>
        </React.Fragment>
}
export default HealthForecast
