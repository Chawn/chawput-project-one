import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Logo from '@assets/images/logo.png'
import WorldIcon from '@/assets/icons/WorldIcon'
import MessageIcon from '@/assets/icons/MessageIcon'
import BellIcon from '@/assets/icons/BellIcon'
import UserImage from '@/assets/images/user-image.png'
import ChevronDownIcon from '@/assets/icons/ChevronDownIcon'
const pages = [
	'Browse',
	'Room Finding',
	'Article',
	'Tools',
	'About',
	'Contact Us'
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar
			position='static'
			color='inherit'
			sx={{
				height: '80px',
				boxShadow: 'none',
				borderBottom: 'solid 1px #e0e0e0'
			}}
			className='flex items-center justify-center'
		>
			<Container
				maxWidth='lg'
				sx={{
					padding: {
						xs: '0 20px',
						md: '0 40px!important'
					}
				}}
			>
				<Toolbar disableGutters>
					{/* Mobile Main Menu */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' }
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* Mobile Logo */}
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						<img src={Logo} alt='logo' />
					</Box>

					{/* Desktop Logo */}
					<Box
						sx={{
							mr: '100px',
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						<img src={Logo} alt='logo' className='h-[32px]' />
					</Box>

					{/* Desktop  Main Menu */}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{
									padding: '8px 16px',
									color: '#212121',
									display: 'block',
									textTransform: 'capitalize',
									fontWeight: 500,
									fontSize: '16px'
								}}
							>
								{page}
							</Button>
						))}
						<Box
							sx={{
								display: 'block'
							}}
						>
							<Button
								variant='outlined'
								color='error'
								onClick={handleCloseNavMenu}
							>
								Post Your Property
							</Button>
						</Box>
					</Box>

					{/* Desktop & Mobile User Menu */}
					<Box
						sx={{
							flexGrow: 0,
							display: 'flex'
						}}
						className='flex h-[48px] items-center space-x-[12px]'
					>
						<Button
							sx={{
								display: { xs: 'none', md: 'flex' },
								width: '36px',
								height: '36px',
								padding: '8px',
								aspectRatio: '1/1',
								minWidth: '36px'
							}}
						>
							<MessageIcon />
						</Button>
						<Button
							sx={{
								display: { xs: 'none', md: 'flex' },
								width: '36px',
								height: '36px',
								padding: '8px',
								aspectRatio: '1/1',
								minWidth: '36px'
							}}
						>
							<BellIcon />
						</Button>
						<Button
							sx={{
								display: { xs: 'none', md: 'flex' },
								width: '36px',
								height: '36px',
								border: '1px solid #e0e0e0',
								padding: '8px',
								aspectRatio: '1/1',
								minWidth: '36px'
							}}
						>
							<WorldIcon />
						</Button>

						<Button
							onClick={handleOpenUserMenu}
							sx={{
								background: '#EEEEEE',
								borderRadius: '100px',
								width: '80px',
								height: '48px',
								alignItems: 'center',
								padding: '4px 8px 4px 4px',
								gap: '4px'
							}}
						>
							<img src={UserImage} width={40} height={40} />
							<ChevronDownIcon />
						</Button>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
