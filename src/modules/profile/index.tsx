import Footer from '@/common/components/Footer'
import Topbar from '@/common/components/Topbar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useQuery } from '@tanstack/react-query'
import DialogSuccess from './components/Dialog/DialogSuccess'
import DialogVerifyThaiID from './components/Dialog/DialogVerifyThaiID'
import MainContent from './components/MainContent'
import SidebarLeft from './components/SidebarLeft'
import useProfileController from './hook/useProfileController'

export default function Home() {
	const { fetchUser } = useProfileController()

	useQuery({
		queryKey: ['user'],
		queryFn: () => fetchUser()
	})

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				gap: '32px'
			}}
		>
			<Topbar />
			<Box component='main' className='relative'>
				<DialogVerifyThaiID />
				<DialogSuccess />
				<Container maxWidth={'lg'} className='my-6'>
					<div className='flex space-x-[40px]'>
						<div className='w-[300px]'>
							<SidebarLeft />
						</div>
						<div className='flex-grow'>
							<MainContent />
						</div>
					</div>
				</Container>
			</Box>
			<Footer />
		</Box>
	)
}
