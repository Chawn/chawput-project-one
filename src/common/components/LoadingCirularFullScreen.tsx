import { Box, CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function LoadingCirularFullScreen() {
	useEffect(() => {
		const time = setTimeout(() => {
			toast.error('Something went wrong..')
		}, 15000)

		return () => {
			clearTimeout(time)
		}
	}, [])

	return (
		<Box
			component='div'
			zIndex={1100}
			className={
				'bg-gray-200 fixed w-screen h-screen  bg-opacity-40 left-0 top-0 z-50'
			}
		>
			<Box
				component='div'
				className='absolute top-1/3 left-1/2 translate-x-1/2 -translate-y-1/2'
			>
				<CircularProgress />
			</Box>
		</Box>
	)
}
