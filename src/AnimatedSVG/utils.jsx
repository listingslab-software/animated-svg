/*
	utils.js 
	Bits and bobs that aren't really needed
	and I'm tired of looking at
*/




import React from 'react'
import { 
    Github,
    Listingslab,
} from './' 







export const getNav = () => {
	return	<React.Fragment>
				<ul className={`nav`}>
                    <li>
                        <a href={`/`} target={`_self`} >
                            AnimatedSVG &trade; 
                        </a>
                    </li>


                    <li>
                        <a href={`https://listingslab.com`} 
                            target={`_blank`}
                            rel={`nofollow`}>
                            <span
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            >
                                <Listingslab
                                    color={`rgba(0, 0, 0, 0.25)`}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </span>
                            
                        </a>
                    </li>

                    <li>
                        <a href={`https://github.com/listingslab-software/animated-svg`} 
                            target={`_blank`}
                            rel={`nofollow`}>
                            <span
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            >
                                <Github
                                    color={`rgba(0, 0, 0, 0.25)`}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </span>
                            
                        </a>
                    </li>

                </ul>
			</React.Fragment>
}