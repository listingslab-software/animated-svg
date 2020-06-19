import React from 'react'

const Listingslab = props => {
    
    const { color } = props
    let c = `#000`
    if (color) {
        c = color
    }

    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512" >
                <g id="ListingslabSVG" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="listingslab" fillRule="nonzero">
                        
                        <g id="blokey" transform="translate(104.000000, 95.000000)" fill={c}>
                            <ellipse id="Oval" cx="148.269939" cy="37.2932331" rx="37.3006135" ry="37.2932331"></ellipse>
                            <path d="M220.938875,113.646 C213.691932,106.392 201.242054,93 177.085575,93 C173.183374,93 150.699267,93 129.887531,93 C78.7872861,92.814 37.1638142,51.15 37.1638142,0 L0,0 C0,58.776 39.207824,108.624 92.9095355,124.806 L92.9095355,372 L130.07335,372 L130.07335,260.4 L167.237164,260.4 L167.237164,372 L204.400978,372 L204.400978,149.73 L277.799511,223.2 L304,196.974 L220.938875,113.646 Z" id="Path"></path>
                        </g>
                    </g>
                </g>                
            </svg>
        </React.Fragment>
    )
}

export default Listingslab
