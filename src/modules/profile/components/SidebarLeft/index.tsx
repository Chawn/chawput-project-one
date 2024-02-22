import { Box, Button, Divider, Typography } from '@mui/material'
import UserImage80 from '@/assets/images/user-image-80.png'
import ShieldCheckIcon from '@/assets/icons/ShieldCheckIcon'
import StartFillIcon from '@/assets/icons/StartFillIcon'
import StartOutlinedIcon from '@/assets/icons/StartOutlinedIcon'
import { makeStyles } from '@mui/styles'
import GeneralList from './GeneralList'

const useStyles = makeStyles({
	card: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '32px 24px 24px',
		gap: '16px',
		width: '300px',
		// height: '446px',
		background: '#FFFFFF',
		border: '1px solid #E0E0E0',
		boxShadow:
			'0px 4px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
		borderRadius: '20px',
		flex: 'none',
		order: 0,
		flexGrow: 0
	},
	tag: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '4px 8px',
		gap: '2px',
		borderRadius: '100px',
		fontSize: '12px!important',
		fontWeight: '500!important',
		lineHeight: '18px!important'
	}
})

export default function SidebarLeft() {
	const classes = useStyles()

	return (
		<Box className={classes.card} sx={{}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '0px',
					gap: '16px'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '0px',
						gap: '4px',
						position: 'relative'
					}}
				>
					<img src={UserImage80} className='w-[80px] h-[80px]' />
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '0px',
							gap: '4px',
							width: '24px',
							height: '24px',
							background: '#FFFFFF',
							borderRadius: '100px',
							position: 'absolute',
							left: '56px',
							top: '56px'
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '2px',
								gap: '4px',
								width: '20px',
								height: '20px',
								background: '#558B2F',
								borderRadius: '100px'
							}}
						>
							<ShieldCheckIcon />
						</Box>
					</Box>
				</Box>
			</Box>

			<Typography
				sx={{
					fontSize: '24px',
					fontWeight: 700,
					lineHeight: '36px',
					letterSpacing: '0em'
				}}
			>
				Jon Snow
			</Typography>

			<Box
				sx={{
					display: 'flex',
					gap: '2px',
					alignItems: 'center'
				}}
			>
				<StartFillIcon />
				<StartFillIcon />
				<StartFillIcon />
				<StartFillIcon />
				<StartOutlinedIcon />
				<Typography
					sx={{
						fontSize: '14px',
						fontWeight: 500,
						lineHeight: '20px'
					}}
				>
					4.0
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					padding: 0,
					gap: '4px',
					width: 188,
					height: 26
				}}
			>
				{/* button info */}

				<Box
					className={classes.tag}
					sx={{
						background: '#0277BD',
						color: '#E1F5FE'
					}}
				>
					Agent
				</Box>
				<Box
					className={classes.tag}
					sx={{
						background: '#4527A0',
						color: '#EDE7F6'
					}}
				>
					Owner
				</Box>
				<Box
					className={classes.tag}
					sx={{
						background: '#F9A825',
						color: '#FFFDE7'
					}}
				>
					Developer
				</Box>
			</Box>

			<Divider />

			{/* General List  */}

			<GeneralList />
		</Box>
	)
}
