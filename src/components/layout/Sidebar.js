import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { menu } from './sideMenu'

const getMenu = (menu) => {
	return <List disablePadding dense>
		{
			menu.map(
				(menuItem, index) => <ListItem key={`${menuItem.name}${index}`} button>
					<ListItemText>{menuItem.name}</ListItemText>
					{menuItem.hasChildren && getMenu(menuItem.children)}
				</ListItem>
			)
		}

	</List>
}


function Sidebar() {
	return <div className="sidebar">
		{
		getMenu(menu)}
	</div>
}


export default Sidebar
