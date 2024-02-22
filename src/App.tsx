import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProviderWrapper from './theme/ThemeProviderWrapper'
import { Toaster } from 'react-hot-toast'
import Profile from './modules/profile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CssBaseline from '@mui/material/CssBaseline'

export default function App() {
	const queryClient = new QueryClient()

	return (
		<ThemeProviderWrapper>
			<CssBaseline />

			<div className='h-full tablet:bg-slate-300 w-full  overflow-hidden flex items-start no-scrollbar'>
				<div className=' w-full mx-auto tablet:w-[390px] h-full tablet:h-full no-scrollbar'>
					<Toaster />
					<QueryClientProvider client={queryClient}>
						<BrowserRouter basename='/'>
							<Routes>
								<Route index path={'/'} element={<Profile />} />
								{/* <Route path={'/login'} element={<Login />} /> */}
								<Route path='*' element={<NotFound />} />
							</Routes>
						</BrowserRouter>
					</QueryClientProvider>
				</div>
			</div>
		</ThemeProviderWrapper>
	)
}

function NotFound() {
	return <div>Not Found</div>
}
