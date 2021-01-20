import React from 'react'

const Flickr = props => {

    const { color } = props
    let c = `#ffffff`
    if (color) {
        c = color;
    }
    
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g>
                            <rect fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="512" height="512"></rect>
                            <g id="flickr" transform="translate(17.000000, 137.000000)" fill={c} fillRule="nonzero">
                                <path d="M233.911,120.945 C233.911,185.437 181.605,237.722 117.093,237.722 C52.581,237.722 0.285,185.436 0.285,120.945 C0.285,56.402 52.581,4.127 117.093,4.127 C181.605,4.127 233.911,56.413 233.911,120.945 Z"></path>
                                <path d="M458.341,118.99 C458.341,173.795 413.746,218.369 358.942,218.369 C304.138,218.369 259.563,173.784 259.563,118.99 C259.563,64.196 304.148,19.621 358.942,19.621 C413.736,19.621 458.341,64.196 458.341,118.99 Z M358.941,0.237 C293.446,0.237 240.167,53.505 240.167,118.991 C240.167,184.486 293.446,237.765 358.941,237.765 C424.426,237.765 477.725,184.496 477.725,118.991 C477.725,53.506 424.415,0.237 358.941,0.237 Z"></path>
                            </g>
                        </g>
                    </g>    
            </svg>
        </React.Fragment>
    )
}

export default Flickr
