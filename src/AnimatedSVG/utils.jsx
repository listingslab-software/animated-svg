/*
	utils.js 

	Bits and bobs that aren't really needed
	and I'm tired of looking at

*/
import React from 'react'

export const getNav = () => {
	return	<React.Fragment>
				<ul className={`nav`}>
                    <li>
                    	<a href={`https://github.com/listingslab-software/animated-svg`} 
                    		target={`blank`}
                    		rel={`nofollow`}>
                            Github
                        </a>
                    </li>
                    <li>
                    	<a href={`https://listingslab.com/animated-svg`} 
                    		target={`blank`}
                    		rel={`nofollow`}>
                            by listingslab
                        </a>
                    </li>
                </ul>
			</React.Fragment>
}