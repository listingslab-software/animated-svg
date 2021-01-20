import React from 'react'
import ReactDOM from 'react-dom'
import reduxStore from './redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import {
	MuiThemeProvider, 
	createMuiTheme,
	CssBaseline,
} from '@material-ui/core/'
import { theme } from './theme'
import { AnimatedSVG } from './AnimatedSVG'

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const store = reduxStore()
export const getStore = () => { return store }

ReactDOM.render(<Provider store={ store }>
					<MuiThemeProvider theme={ createMuiTheme( theme )}>
						<CssBaseline />
						<AnimatedSVG 
					      options={{
					      	display: 'fixed', // responsive || fixed
					        width: 1280,
					        height: 720,
					      }} 
					    />
				    </MuiThemeProvider>
			    </Provider>,
	document.getElementById('animated-svg')
)