import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { useProfileStore } from '../../store/useProfileStore'
import { makeStyles } from '@mui/styles'
import { FormControl, FormLabel, TextField } from '@mui/material'
import UploadIcon from '@/assets/icons/UploadIcon'
import CheckSuccessIcon from '@/assets/icons/CheckSuccessIcon'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: 0,
		width: '360px'
	},
	'& .MuiDialogActions-root': {
		padding: 0,
		width: '360px'
	}
}))

const useStyles = makeStyles({
	dialog: {
		position: 'absolute',
		left: 10,
		top: 50
	},
	title: {
		fontWeight: 700,
		fontSize: '32px',
		lineHeight: '48px',
		color: '#212121',
		width: '360px'
	},
	subtitle: {
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '24px',
		color: '#757575'
	},
	verifyButton: {
		background: '#A67E59',
		borderRadius: '100px',
		padding: '12px 20px!important',
		gap: '8px',
		height: '48px!important',
		fontSize: '16px!important'
	}
})

export default function DialogSuccess() {
	const classes = useStyles()
	const { openDialogSuccess, setOpenDialogSuccess } = useProfileStore()

	const handleClickOpen = () => {
		setOpenDialogSuccess(true)
	}
	const handleClose = () => {
		setOpenDialogSuccess(false)
	}

	return (
		<BootstrapDialog onClose={handleClose} open={openDialogSuccess}>
			<div className='h-[48px] flex justify-end'>
				<IconButton
					aria-label='close'
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 24,
						top: 24,
						color: '#212121'
					}}
				>
					<CloseIcon />
				</IconButton>
			</div>
			<div className='flex flex-col space-y-[24px] pb-[48px]'>
				<CheckSuccessIcon />
				<DialogTitle sx={{ m: 0, p: 0, width: '360px' }}>
					<p className={classes.title}>Verification success</p>
					<p className={classes.subtitle}>
						Let’s explore to the Platform, and thank you for your verification
					</p>
				</DialogTitle>
				<DialogContent>
					<div className='flex flex-col space-y-[20px]'>
						<Button
							variant='contained'
							sx={{
								width: '360px'
							}}
							autoFocus
							disableRipple
							onClick={handleClose}
							className={classes.verifyButton}
						>
							Continue to Prop
						</Button>
					</div>
				</DialogContent>
			</div>
		</BootstrapDialog>
	)
}
