import React from "react"

const Goals = props => {

    const { color } = props
    let c = `#692b79`
    if (color) {
        c = color
    }

    return <React.Fragment>
            {/* <svg {...props} viewBox="0 0 100 100" >
                
            <g id="goals" transform="translate(154 96)">
                <rect id="Rectangle_1" data-name="Rectangle 1" width="100" height="100" transform="translate(-154 -96)" fill="rgba(255,255,255,0)"/>
                <g id="Group_1" data-name="Group 1" transform="translate(-104.529 -76.145)">
                  <path id="Path_1" data-name="Path 1" d="M239.344,108.525a2.385,2.385,0,0,1-1.674-.691,2.361,2.361,0,0,1,0-3.347l29.616-29.616a2.367,2.367,0,0,1,3.347,3.347l-29.616,29.616A2.385,2.385,0,0,1,239.344,108.525Z" transform="translate(-236.975 -74.175)" fill={c}/>
                </g>
                <g id="Group_2" data-name="Group 2" transform="translate(-78.51 -84.181)">
                  <path id="Path_2" data-name="Path 2" d="M389.1,30,380,39.1v7.277h7.277l9.1-9.1H389.1Z" transform="translate(-380 -30)" fill={c}/>
                </g>
                <g id="Group_3" data-name="Group 3" transform="translate(-118.532 -60.532)">
                  <path id="Path_3" data-name="Path 3" d="M180.229,180.229a5.454,5.454,0,1,1-7.713-7.713l10.9-10.9a16.071,16.071,0,0,0-7.04-1.619,16.372,16.372,0,1,0,16.372,16.372,16.013,16.013,0,0,0-1.619-7.04Z" transform="translate(-160 -160)" fill={c}/>
                </g>
                <g id="Group_4" data-name="Group 4" transform="translate(-144 -86)">
                  <path id="Path_4" data-name="Path 4" d="M96.969,39.138h0L95.35,40.757,94.276,41.83H89.565L84.6,46.8a27.3,27.3,0,1,1-7.713-7.713l4.966-4.966V29.405l1.073-1.073,1.619-1.619A41.879,41.879,0,1,0,96.969,39.138Z" transform="translate(-20 -20)" fill={c}/>
                </g>
              </g>
                
            </svg> */}
            <svg {...props} viewBox="0 0 100 100">
              <g id="goals" transform="translate(201 256)">
                <rect id="rect" width="100" height="100" transform="translate(-201 -256)" fill="rgba(255,255,255,0)"/>
                <path id="Icon_awesome-trophy" d="M127.837,65.111H109.78V58.168A4.154,4.154,0,0,0,105.636,54H58.391a4.156,4.156,0,0,0-4.168,4.143v6.968H36.168A4.156,4.156,0,0,0,32,69.255V79c0,6.2,3.906,12.571,10.746,17.482a40.724,40.724,0,0,0,19.1,7.242A38.426,38.426,0,0,0,73.665,116.5V129H65.334c-6.129,0-11.111,3.593-11.111,9.724v2.084a2.088,2.088,0,0,0,2.084,2.079H107.7a2.091,2.091,0,0,0,2.084-2.084v-2.084c0-6.129-4.983-9.724-11.111-9.724H90.335V116.5a38.4,38.4,0,0,0,11.823-12.776,40.529,40.529,0,0,0,19.094-7.242C128.076,91.566,132,85.2,132,79V69.274a4.156,4.156,0,0,0-4.146-4.168A.024.024,0,0,1,127.837,65.111ZM49.24,87.472C45,84.418,43.111,81.015,43.111,79V76.223H54.257A62.378,62.378,0,0,0,56.48,91.189a27.95,27.95,0,0,1-7.24-3.7v-.012ZM120.891,79c0,2.8-3.074,6.267-6.129,8.472a28.04,28.04,0,0,1-7.254,3.7,62.258,62.258,0,0,0,2.22-14.953h11.163Z" transform="translate(-233 -305)" fill={c}/>
              </g>
            </svg>
        </React.Fragment>
}
export default Goals
