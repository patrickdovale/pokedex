import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-family: 'arial', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		-webkit-tap-highlight-color: transparent;
	}

	html, body {
		height: 100%;
	}

	a {
		text-decoration: none !important;
	}

	h1{
		font-family: 'arial', serif;
		font-weight: 100;
		strong{
			font-family: 'arial', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	h2 {
		font-family: 'arial', serif;
		font-weight: 200;
		strong{
			font-family: 'arial', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	h3 {
		font-family: 'arial', serif;
		font-weight: 300;
		strong{
			font-family: 'arial', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	.serif{
		font-family: 'arial', serif;
		font-weight: 600;
	}
`
export default GlobalStyles
