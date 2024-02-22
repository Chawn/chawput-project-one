import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import { themeOptions } from './themeOptions'

const ThemeProviderWrapper = (props: any) => {
	const theme: ThemeOptions = createTheme(themeOptions)

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</StylesProvider>
	)
}

export default ThemeProviderWrapper
