import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '../../context/ui';

interface SidebarProps {

}

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar: React.FC<SidebarProps> = () => {
    const { isSidemenuOpen } = useContext(UIContext)

    return (
        <Drawer
            anchor="left"
            open={isSidemenuOpen}
            onClose={() => console.log('cerrando...')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    );
}