import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useRouter } from 'next/router';
import { Box, Paper } from '@mui/material';

const SideNavigation = [
  {
    
  }
];

export default function SideBar() {
  const router = useRouter()

  const navigateUrl = (link: any) => {
    router.push(link)
  }

  return (
    <Paper elevation={1}>
      <List
      
        sx={{color: '#000' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            sx={{ bgcolor: 'rgba(207, 207, 207, 0.15)' }}
            component="div"
            id="nested-list-subheader"
          >
            Navigation
          </ListSubheader>
        }
      >
        <ListItemButton onClick={() => navigateUrl('/dashboard/employe')}>
          <ListItemIcon>
            <SendIcon sx={(t) => ({
              color: t.palette.text.primary
            })} />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>
      </List>
    </Paper>
  )
}
