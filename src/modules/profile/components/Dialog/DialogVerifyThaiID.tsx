import UploadIcon from '@/assets/icons/UploadIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import LoadingButton from '@mui/lab/LoadingButton'
import { FormControl, FormLabel, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import useProfileController from '../../hook/useProfileController'
import { useProfileStore } from '../../store/useProfileStore'

const BootstrapDialog = styled(Dialog)(() => ({
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

export default function DialogVerifyThaiID() {
	const classes = useStyles()
	const { openDialogVerify, setOpenDialogVerify } = useProfileStore()
	const [uploadPhoto, setUploadPhoto] = useState<string>()
	const [onMouseEnter, setOnMoueEnter] = useState<boolean>(false)
	const { handleVerifyID, isLoadingVerify } = useProfileController()

	const schema: yup.ObjectSchema<any> = yup.object().shape({
		thaiNationalIdNumber: yup.string().required('Name is required'),
		thaiNationalIdCardPhoto: yup
			.mixed()
			.test('fileSize', 'The file is too large', (value: any) => {
				if (!value) return false // attachment is optional
				return value.size <= 2097152
			})
	})

	const {
		register,
		handleSubmit,
		formState: { isValid },
		setValue,
		reset
	} = useForm<any>({
		mode: 'all',
		resolver: yupResolver(schema)
	})

	useEffect(() => {
		reset()
		setUploadPhoto('')
	}, [openDialogVerify])

	const handleClose = () => {
		setOpenDialogVerify(false)
		setTimeout(() => {
			reset()
			setUploadPhoto('')
		}, 300)
	}

	const isSizeTooSmall = (fileSize: number) => {
		if (fileSize < 8000) {
			toast.error('File is too small! minimum 8 kB. ')
			return true
		} else {
			return false
		}
	}

	const isSizeTooBig = (fileSize: number) => {
		if (fileSize > 2097152) {
			toast.error('File is too big! limit 2 MB.')
			return true
		} else {
			return false
		}
	}

	const handleUploadPhoto = (e: any) => {
		e.preventDefault()
		const file = e.target.files[0]

		if (!file) return
		if (isSizeTooBig(file.size)) {
			return
		} else if (isSizeTooSmall(file.size)) {
			return
		} else {
			const newFileData = new FormData()
			newFileData.append('file', file)
			setValue('thaiNationalIdCardPhoto', file, { shouldValidate: true })

			const reader = new FileReader()

			reader.onload = (file) => {
				const image = new Image()
				image.src = file.target?.result as string

				image.onload = () => {
					// const canvas = document.createElement('canvas')
					// const context = canvas.getContext('2d')
					// const targetWidth = 324
					// const targetHeight = 167

					// // Calculate the scaling factors
					// const scaleFactor = Math.max(
					// 	targetWidth / image.width,
					// 	targetHeight / image.height
					// )
					// const scaledWidth = image.width * scaleFactor
					// const scaledHeight = image.height * scaleFactor

					// // Calculate the position to center the image
					// const x = (targetWidth - scaledWidth) / 2
					// const y = (targetHeight - scaledHeight) / 2

					// // Draw the image on the canvas
					// canvas.width = targetWidth
					// canvas.height = targetHeight
					// context && context.drawImage(image, x, y, scaledWidth, scaledHeight)

					// // Convert the canvas content to base64 data URL
					// const croppedImage = canvas.toDataURL('image/jpeg')
					setUploadPhoto(image.src)
				}
			}

			reader.readAsDataURL(file)
		}
		e.target.value = ''
	}

	// drag state
	const [dragActive, setDragActive] = useState(false)
	// ref
	const inputImageRef = useRef<any>()

	// handle drag events
	const handleDrag = function (e: any) {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true)
		} else if (e.type === 'dragleave') {
			setDragActive(false)
		}
	}

	// triggers when file is dropped
	const handleDrop = function (e: any) {
		e.preventDefault()
		e.stopPropagation()
		setDragActive(false)
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			e.target.files = e.dataTransfer.files
			handleUploadPhoto(e)
		}
	}

	// triggers when file is dropped

	const handleChange = (e: any) => {
		e.preventDefault()
		handleUploadPhoto(e)
	}

	// triggers the input when the button is clicked
	const onButtonClick = () => {
		inputImageRef.current.click()
	}

	return (
		<BootstrapDialog onClose={handleClose} open={openDialogVerify}>
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
			<div className='flex flex-col space-y-[32px] pb-10'>
				<DialogTitle sx={{ m: 0, p: 0, width: '360px' }}>
					<p className={classes.title}>Verify your Thai </p>
					<p className={classes.title}>National ID</p>
					<p className={classes.subtitle}>
						We’ll check your information and authenticate you within 5 -7 days.
					</p>
				</DialogTitle>
				<DialogContent>
					<div className='flex flex-col space-y-[20px]'>
						<FormControl fullWidth required>
							<FormLabel>Thai National ID number</FormLabel>
							<TextField
								variant='outlined'
								fullWidth
								placeholder='Fill your Thai National ID number'
								{...register('thaiNationalIdNumber')}
								disabled={isLoadingVerify}
							/>
						</FormControl>
						<FormControl fullWidth required>
							<FormLabel>Thai National ID card Photo</FormLabel>

							<div
								className='w-full aspect-[16/9] bg-white border-dashed border-[2px] border-[#E0E0E0] rounded-xl overflow-hidden p-[16px] relative'
								id='form-update-photo'
								onDragOver={handleDrag}
							>
								<label
									id='label-file-upload'
									htmlFor='dropzone-file'
									onMouseEnter={() => setOnMoueEnter(true)}
									onMouseLeave={() => setOnMoueEnter(false)}
									className={
										(dragActive ? 'drag-active' : '') +
										'bg-[#F5F5F5] w-full h-full flex flex-col justify-center items-center relative'
									}
								>
									{dragActive && (
										<div
											id='grag-over-bg'
											className='z-50 bg-blue-500 bg-opacity-30 absolute top-0 left-0  w-full h-full '
											onDragEnter={handleDrag}
											onDragLeave={handleDrag}
											onDragOver={handleDrag}
											onDrop={handleDrop}
										></div>
									)}
									{uploadPhoto && (
										<img src={uploadPhoto} className='max-w-full max-h-full' />
									)}

									<div
										className={`
									${
										uploadPhoto
											? onMouseEnter
												? 'flex text-white bg-black bg-opacity-50'
												: 'hidden '
											: 'flex '
									}
									hover:cursor-pointer flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full`}
									>
										<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
											<Button
												variant='contained'
												startIcon={<UploadIcon />}
												sx={{
													width: '104px'
												}}
												onClick={onButtonClick}
												disabled={isLoadingVerify}
											>
												Upload
											</Button>
										</p>
										<Typography
											color='textSecondary'
											sx={{
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '24px',
												color: uploadPhoto ? '#ffffff' : '#212121'
											}}
										>
											or Drag photo here
										</Typography>
									</div>
									<input
										ref={inputImageRef}
										type='file'
										id='dropzone-file'
										onChange={handleChange}
										accept='.jpg, .jpeg, .png'
										className='hidden'
									/>
								</label>
							</div>
						</FormControl>
						{isLoadingVerify ? (
							<LoadingButton
								loading
								loadingPosition='start'
								className={classes.verifyButton}
								disableRipple
								variant='contained'
								sx={{
									width: '360px',
									/* MuiLoadingButton-loadingIndicator */
									'& .MuiLoadingButton-loadingIndicator': {
										left: '30%'
									},
									'& .MuiCircularProgress-root': {
										width: '24px!important',
										height: '24px!important'
									}
								}}
							>
								Saving...
							</LoadingButton>
						) : (
							<Button
								variant='contained'
								sx={{
									width: '360px'
								}}
								disableRipple
								onClick={handleSubmit(handleVerifyID)}
								className={classes.verifyButton}
								disabled={!isValid}
							>
								Verify
							</Button>
						)}
					</div>
				</DialogContent>
			</div>
		</BootstrapDialog>
	)
}
