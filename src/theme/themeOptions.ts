import { ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
	/* radius */
	typography: {
		fontFamily: [
			'Inter',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
		h1: {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: 700,
			fontSize: '28px',
			lineHeight: '42px'
		},
		h2: {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: 700,
			fontSize: '24px',
			lineHeight: '36px'
		},
		subtitle1: {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: '24px',
			color: '#757575!important'
		}
	},
	shape: {
		borderRadius: 10
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#A67E59'
		},
		secondary: {
			main: '#4527A0'
		},
		error: {
			main: '#B71C1C'
		},
		warning: {
			main: '#F57F17'
		},
		info: {
			main: '#0277BD'
		},
		success: {
			main: '#33691E'
		}
	},
	spacing: 8,
	direction: 'rtl',

	components: {
		// MuiCssBaseline: {
		// 	styleOverrides: `
		//     @font-face {
		//       font-family: 'Inter';
		//       font-style: normal;
		//       font-display: swap;
		//       font-weight: 400;
		// 			font-size: 16px;
		//     }
		//   `
		// },
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 30
				},
				// /* button size small */
				// sizeSmall: {
				// 	textTransform: 'capitalize',
				// 	fontWeight: 500,
				// 	fontSize: '14px',
				// 	lineHeight: '20px',
				// 	height: '36px',
				// 	padding: '8px 16px'
				// },
				/* button size medium */
				sizeMedium: {
					textTransform: 'capitalize',
					fontWeight: 500,
					fontSize: '14px',
					lineHeight: '20px',
					height: '36px',
					padding: '8px 16px'
				}
			}
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					/* maxWidthLg */
					'@media (min-width: 1280px)': {
						maxWidth: '1360px'
					}
				}
			}
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					background: '#E0E0E0',
					height: '1px',
					width: '100%'
				}
			}
		},
		MuiList: {
			styleOverrides: {
				root: {
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					gap: '4px'
				}
			}
		},
		MuiListSubheader: {
			styleOverrides: {
				root: {
					fontSize: '12px!important',
					fontWeight: 400,
					lineHeight: '18px',
					letterSpacing: '0em'
				}
			}
		},
		/* MuiListItemButton-root */
		MuiListItemButton: {
			styleOverrides: {
				root: {
					display: 'flex!important',
					alignItems: 'center!important',
					padding: '8px 12px!important',
					gap: '8px!important',
					height: '36px!important',
					borderRadius: '24px!important',
					'&.Mui-selected': {
						display: 'flex!important',
						alignItems: 'center!important',
						padding: '8px 12px!important',
						gap: '8px!important',
						// width: '252px!important',
						height: '36px!important',
						backgroundColor: '#A67E59!important',
						borderRadius: '24px!important',
						color: '#fff!important'
					},
					'&.Mui-selected > .MuiListItemText-root > *': {
						fontWeight: '500!important'
					}
				}
			}
		},
		/* .css-cveggr-MuiListItemIcon-root */
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: '20px'
				}
			}
		},
		/* MuiListItemText-root css-tlelie-MuiListItemText-root */
		MuiListItemText: {
			styleOverrides: {
				root: {
					fontSize: '14px!important',
					fontWeight: 400,
					lineHeight: '20px!important'
				},
				primary: {
					fontSize: '14px!important',
					fontWeight: 400,
					lineHeight: '20px!important'
				}
			}
		},
		/* MuiDialog-container */
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: '24px!important',
					width: '536px!important',
					display: 'flex!important',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					left: 10,
					top: '-10%'
				}
			}
		}
	}
}
