import BellIcon from '@/assets/icons/BellIcon'
import HearthIcon from '@/assets/icons/HeartIcon'
import MessageIcon from '@/assets/icons/MessageIcon'
import UserCircleIcon from '@/assets/icons/UserCircleIcon'
import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	badge: {
		backgroundColor: '#EF6C00',
		borderRadius: '22px',
		padding: '0 7px',
		fontSize: '16px',
		color: 'white',
		fontWeight: 500,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default function GeneralList() {
	const classes = useStyles()

	const data = [
		{
			selected: true,
			icon: <UserCircleIcon />,
			text: 'Account',
			count: 0
		},
		{
			selected: false,
			icon: <BellIcon width={20} height={20} />,
			text: 'Notification',
			count: 5
		},
		{
			selected: false,
			icon: <MessageIcon width={20} height={20} />,
			text: 'Chat',
			count: 12
		},
		{
			selected: false,
			icon: <HearthIcon width={20} height={20} />,
			text: 'Favorite',
			count: 0
		}
	]

	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
			component='nav'
			aria-labelledby='nested-list-subheader'
			subheader={<ListSubheader component='div'>General</ListSubheader>}
		>
			{data.map((item) => (
				<ListItemButton key={item.text} selected={item.selected}>
					<ListItemIcon>{item.icon}</ListItemIcon>
					<ListItemText primary={item.text} />
					{item.count > 0 && <Box className={classes.badge}>{item.count}</Box>}
				</ListItemButton>
			))}
		</List>
	)
}
