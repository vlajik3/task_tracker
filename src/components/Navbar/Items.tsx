import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { INavBarItems } from '../../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';

interface ItemsProps {
    items: INavBarItems[];
    open: boolean;
}
const Items = ({ items, open }: ItemsProps) => {
    const navigate = useNavigate();

    return (
        <List>
            {items.map((item) => (
                <ListItem disablePadding sx={{ display: 'block' }} key={item.id} onClick={() => navigate(item.route)}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
export default Items;
