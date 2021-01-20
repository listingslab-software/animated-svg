import React from "react"

const Allergies = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            <svg {...props} viewBox="0 0 100 100" >        

  <g transform="translate(25 8.604)">
    <rect width="100" height="100" transform="translate(-25 -8.604)" fill="rgba(255,255,255,0)"/>
    <circle cx="2.195" cy="2.195" r="2.195" transform="translate(27.716 83.546)" fill={c}/>
    <circle cx="2.195" cy="2.195" r="2.195" transform="translate(47.471 61.595)" fill={c}/>
    <circle cx="2.195" cy="2.195" r="2.195" transform="translate(27.716 61.595)" fill={c}/>
    <circle cx="2.195" cy="2.195" r="2.195" transform="translate(47.471 41.84)" fill={c}/>
    <circle cx="2.195" cy="2.195" r="2.195" transform="translate(67.227 41.84)" fill={c}/>
    <path d="M4,11.39H9.488a23.562,23.562,0,0,1,12.731,3.951,10.993,10.993,0,0,1,1.537-1.756l1.537-1.537A27.658,27.658,0,0,0,9.488,7H4Z" transform="translate(-26.77 -6.866)" fill={c}/>
    <path d="M33.508,76.6h0a2.386,2.386,0,0,1-2.2-1.537A60.583,60.583,0,0,0,16.607,51.8,27.007,27.007,0,1,1,54.8,13.607C66.873,25.9,77.409,26.118,77.409,26.118a2.634,2.634,0,0,1,2.2,1.537,2.083,2.083,0,0,1-.878,2.415c-.439.22-10.756,6.8-19.755,7.024a136.59,136.59,0,0,1,.878,17.56,2.2,2.2,0,0,1-2.2,2.2,136.9,136.9,0,0,1-17.341-.878,76.844,76.844,0,0,1-4.829,19.316A1.921,1.921,0,0,1,33.508,76.6Z" transform="translate(-21.158 -8.424)" fill={c}/>
  </g>
                
            </svg>
        </React.Fragment>
}
export default Allergies
