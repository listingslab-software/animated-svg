import React from "react"

const Hospital = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g id="_100x100Icon" data-name="100x100Icon" transform="translate(25 8.604)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <g id="hospital_f" transform="translate(-52 -14.604)">
      <g id="Group_278" data-name="Group 278" transform="translate(57.063 8)">
        <path id="Path_326" data-name="Path 326" d="M188.867,47.113H166.246A8.256,8.256,0,0,1,158,38.867V16.246A8.256,8.256,0,0,1,166.246,8h22.411a8.6,8.6,0,0,1,8.456,8.077v22.79a8.256,8.256,0,0,1-8.246,8.246ZM166.246,13.074a3.141,3.141,0,0,0-3.172,3.172V38.867a3.141,3.141,0,0,0,3.172,3.172h22.622a3.141,3.141,0,0,0,3.172-3.172V16.35a3.488,3.488,0,0,0-3.382-3.276Z" transform="translate(-158 -8)" fill={c}/>
      </g>
      <g id="Group_279" data-name="Group 279" transform="translate(30 25.336)">
        <path id="Path_327" data-name="Path 327" d="M117.316,90H99.98v13.53a12.073,12.073,0,0,1-12.05,12.05H65.307a12.073,12.073,0,0,1-12.05-12.05V90H37.822A7.833,7.833,0,0,0,30,97.822v70.4H68.055V142.855H84.975v25.371h40.162v-70.4A7.833,7.833,0,0,0,117.316,90ZM55.371,155.54H40.57V142.855h14.8Zm0-23.257H40.57V119.6h14.8ZM97.656,119.6h14.8v12.684h-14.8Zm0,23.257h14.8V155.54h-14.8Zm-29.6-10.57V119.6H84.976v12.684Z" transform="translate(-30 -90)" fill={c}/>
      </g>
      <g id="Group_280" data-name="Group 280" transform="translate(73.867 19.82)">
        <rect id="Rectangle_230" data-name="Rectangle 230" width="5.127" height="15.381" transform="translate(0 0)" fill={c}/>
      </g>
      <g id="Group_281" data-name="Group 281" transform="translate(68.74 24.947)">
        <rect id="Rectangle_231" data-name="Rectangle 231" width="15.381" height="5.127" transform="translate(0 0)" fill={c}/>
      </g>
    </g>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Hospital
