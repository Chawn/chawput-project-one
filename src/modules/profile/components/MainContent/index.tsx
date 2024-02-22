import CameraIcon from '@/assets/icons/CameraIcon'
import ErrorIcon from '@/assets/icons/ErrorIcon'
import IdCardIcon from '@/assets/icons/IdCardIcon'
import LockIcon from '@/assets/icons/LockIcon'
import MailIcon from '@/assets/icons/MailIcon'
import PhotoIcon from '@/assets/icons/PhotoIcon'
import UserIcon from '@/assets/icons/UserIcon'
import VerifiedIcon from '@/assets/icons/VerifiedIcon'
import Cover from '@/assets/images/cover.png'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useProfileStore } from '../../store/useProfileStore'

const useStyles = makeStyles({
	card: {
		borderRadius: '24px',
		flex: 'none',
		order: 1,
		flexGrow: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0px',
		gap: '32px'
	},
	rowInfo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '16px',
		heght: '48px',
		padding: '16px 0',
		borderBottom: '1px solid #E0E0E0'
	},
	iconInfo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	info: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		gap: '4px'
	},
	info__title: {
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#212121'
	},
	info__subtitle: {
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '20px',
		color: '#757575',
		display: 'flex',
		alignItems: 'center',
		gap: '4px'
	},
	camera: {
		position: 'absolute',
		width: '48px',
		height: '48px',
		right: '16px',
		bottom: '16px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1
	},
	camera__button: {
		borderRadius: '100px',
		width: '48px!important',
		height: '48px!important',
		padding: 0
	},
	editButton: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '8px 16px',
		gap: '4px',
		background: '#EEEEEE!important',
		borderRadius: '100px',
		color: '#212121!important'
	},
	verifyButton: {
		display: 'flex!important',
		justifyContent: 'center!important',
		alignItems: 'center!important',
		padding: '8px 16px!important',
		gap: '4px!important',
		background: '#FFF3E0!important',
		border: '1px solid #FFE0B2!important',
		borderRadius: '100px!important',
		color: '#F57F17!important'
	}
})

export default function MainContent() {
	const classes = useStyles()

	const { setOpenDialogVerify, userData, isVerifySuccess } = useProfileStore()

	function convertString(inputString: string) {
		const firstThree = inputString.substring(0, 3)
		const lastThree = inputString.substring(inputString.length - 3)
		const asterisks = '*'.repeat(inputString.length - 6)
		return firstThree + asterisks + lastThree
	}

	return (
		<Box className={classes.card}>
			<Box>
				<Typography variant='h1' color='initial'>
					Account
				</Typography>
				<Typography variant='subtitle1' color='initial'>
					Edit account details and preferences
				</Typography>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<Typography variant='h2' color='initial'>
					General
				</Typography>
				<Box className={classes.rowInfo}>
					<Box className={classes.iconInfo}>
						<PhotoIcon />
					</Box>
					<Box className={classes.info}>
						<Typography className={classes.info__title}>Cover Photo</Typography>
						<Typography className={classes.info__subtitle}>
							Recommended size: 1500x400px
						</Typography>
					</Box>
				</Box>
				<div className='w-full relative'>
					<img src={Cover} className='w-full' />
					<Box
						className={`${classes.camera} bg-black bg-opacity-70 hover:bg-[#A67E59] rounded-full`}
					>
						<IconButton className={`${classes.camera__button} `}>
							<CameraIcon />
						</IconButton>
					</Box>
				</div>
				<Box className={classes.rowInfo}>
					<Box className={classes.iconInfo}>
						<UserIcon />
					</Box>
					<Box className={classes.info}>
						<Typography className={classes.info__title}>Cover Photo</Typography>
						<Typography className={classes.info__subtitle}>
							Recommended size: 1500x400px
						</Typography>
					</Box>
					<Button className={classes.editButton}>Edit</Button>
				</Box>
			</Box>

			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<Typography variant='h2' color='initial'>
					Verification
				</Typography>

				<Box className={classes.rowInfo}>
					<Box className={classes.iconInfo}>
						<MailIcon />
					</Box>
					<Box className={classes.info}>
						<Typography className={classes.info__title}>Email</Typography>
						<Typography className={`${classes.info__subtitle}`}>
							<ErrorIcon /> Add an email address
						</Typography>
					</Box>
					<Button className={classes.verifyButton}>Verify Now</Button>
				</Box>

				<Box className={classes.rowInfo}>
					<Box className={classes.iconInfo}>
						<IdCardIcon />
					</Box>
					{userData.isVerifyThaiNationalId || isVerifySuccess ? (
						<>
							<Box className={classes.info}>
								<Typography className={classes.info__title}>
									Thai National ID
								</Typography>
								<Typography className={`${classes.info__subtitle}`}>
									{convertString(userData.thaiNationalIdNumber)}
									<VerifiedIcon />
								</Typography>
							</Box>

							<Button
								className={classes.editButton}
								onClick={() => setOpenDialogVerify(true)}
							>
								Change
							</Button>
						</>
					) : (
						<>
							<Box className={classes.info}>
								<Typography className={classes.info__title}>
									Thai National ID
								</Typography>
								<Typography className={`${classes.info__subtitle}`}>
									<ErrorIcon /> Add your Thai National ID
								</Typography>
							</Box>

							<Button
								className={classes.verifyButton}
								onClick={() => setOpenDialogVerify(true)}
							>
								Verify Now
							</Button>
						</>
					)}
				</Box>
			</Box>

			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<Typography variant='h2' color='initial'>
					Password
				</Typography>

				<Box className={classes.rowInfo}>
					<Box className={classes.iconInfo}>
						<LockIcon />
					</Box>
					<Box className={classes.info}>
						<Typography className={classes.info__title}>
							Change Password
						</Typography>
						<Typography className={`${classes.info__subtitle}`}>
							•••••••••••
						</Typography>
					</Box>
					<Button className={classes.editButton}>Edit</Button>
				</Box>
			</Box>

			<Box className='flex space-x-[16px]'>
				<Button variant='text' color='error'>
					Delete Account
				</Button>
				<Button
					variant='outlined'
					color='error'
					sx={{
						borderColor: '#E0E0E0'
					}}
				>
					Deactivate Account
				</Button>
			</Box>
		</Box>
	)
}
