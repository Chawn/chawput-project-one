import { Box, Button, Container, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { menu1, menu2, menu3, menu4 } from './menu_list'
import LogoFooterIcon from '@/assets/icons/LogoFooterIcon'
import YoutubeIcon from '@/assets/icons/YoutubeIcon'
import TikTokIcon from '@/assets/icons/TikTokIcon'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import LineIcon from '@/assets/icons/LineIcon'
import WorldIcon from '@/assets/icons/WorldIcon'

const useStyles = makeStyles({
	footer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0px',
		width: '100%',
		height: '376px',
		background: '#A67E59'
	},
	mainContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '48px 0 32px 60px',
		gap: '40px'
	},
	mainContent__menu: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		padding: '0px',
		alignContent: 'space-between',
		alignSelf: 'stretch',
		width: '1056px',
		margin: '0 auto'
	},
	ul: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0px',
		gap: '8px',
		flexGrow: 1
	},
	li__title: {
		fontSize: '16px!important',
		fontWeight: 700,
		lineHeight: '20px!important',
		color: '#FFFCFA!important'
	},
	li: {
		fontSize: '14px!important',
		fontWeight: 500,
		lineHeight: '20px!important',
		color: '#FFFCFA!important'
	},

	secondContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '10px',
		height: '100px!important',
		justifyContent: 'center'
	},
	buttonLang: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '8px 16px',
		gap: '4px',
		height: '36px',
		background: '#FFFCFA!important',
		borderRadius: '100px',
		fontSize: '14px!important'
	}
})

export default function Footer() {
	const classes = useStyles()

	return (
		<Box
			className={classes.footer}
			// sx={{
			// 	position: 'absolute',
			// 	bottom: 0,
			// 	width: '100%',
			// 	backgroundColor: '#A67E59'
			// }}
		>
			<Container maxWidth={'lg'}>
				<Box className={classes.mainContent}>
					<Box className={classes.mainContent__menu}>
						<ul className={classes.ul}>
							<li className={classes.li__title}>Prop</li>
							{menu1.map((item) => (
								<li className={classes.li} key={item.title}>
									{item.title}
								</li>
							))}
						</ul>

						<ul className={classes.ul}>
							<li className={classes.li__title}>Top 5 Property</li>
							{menu2.map((item) => (
								<li className={classes.li} key={item.title}>
									{item.title}
								</li>
							))}
						</ul>

						<ul className={classes.ul}>
							<li className={classes.li__title}>Top 5 BTS / MRT</li>
							{menu3.map((item) => (
								<li className={classes.li} key={item.title}>
									{item.title}
								</li>
							))}
						</ul>

						<ul className={classes.ul}>
							<li className={classes.li__title}>Condo for Rent</li>
							{menu4.map((item) => (
								<li className={classes.li} key={item.title}>
									{item.title}
								</li>
							))}
						</ul>
					</Box>
				</Box>
			</Container>
			<Container maxWidth={'lg'}>
				<Box className={classes.secondContent}>
					<div
						className='flex items-center w-full
					py-[32px] gap-[40px] h-[100px] flex-none order-0 align-self-stretch flex-grow-0'
					>
						<div className='flex flex-grow space-x-[24px] items-center'>
							<LogoFooterIcon />
							<Typography className='text-[#FFFCFA]'>
								Terms of Service
							</Typography>
							<Typography className='text-[#FFFCFA]'>Privacy Policy</Typography>
							<Typography className='text-[#FFFCFA]'>© 2023 Prop</Typography>
						</div>
						<Button
							className={classes.buttonLang}
							startIcon={<WorldIcon width={20} height={20} color='#A67E59' />}
						>
							English - THB
						</Button>
						<div className='flex justify-end items-center space-x-[16px]'>
							<YoutubeIcon />
							<TikTokIcon />
							<FacebookIcon />
							<LineIcon />
						</div>
					</div>
				</Box>
			</Container>
		</Box>
	)
}
