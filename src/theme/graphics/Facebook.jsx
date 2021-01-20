import React from "react"

const Facebook = props => {
    const { color } = props;
    let c = `#ffffff`;
    if (color) {
        c = color;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                     <rect fillOpacity="0" fill={c} x="0" y="0" width="512" height="512"></rect>
                        <g id="facebook" transform="translate(19.000000, 19.000000)" fillRule="nonzero">
                            <path d="M326.010896,473 L326.010896,290.084472 L387.335217,290.084472 L396.517664,218.799045 L326.010896,218.799045 L326.010896,173.287804 C326.010896,152.649028 331.73528,138.584383 361.296316,138.584383 L399,138.567888 L399,74.80963 C392.479291,73.940899 370.097992,72 344.059091,72 C289.698491,72 252.481755,105.220713 252.481755,166.22799 L252.481755,218.799045 L191,218.799045 L191,290.084472 L252.481755,290.084472 L252.481755,473 L326.010896,473 Z" fill={c}></path>
                        </g>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default Facebook
