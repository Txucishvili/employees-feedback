import React from 'react'
import { Grid, Card, IconButton, Menu, MenuItem, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'Send Feedback',
];

export default function EmployeItem({ user }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item sm={6} xs={12} md={3} >
      <Card sx={{ position: 'relative', width: '100%', flexShrink: 0 }}>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            color='info'
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 5
            }}
          >
            <MoreVertIcon sx={(t) => ({
              color: t.palette.text.primary
            })} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 500,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <CardActionArea>

          <CardMedia
            component="img"
            height="225"
            image={`https://test-task-api-optimo.herokuapp.com${user.avatar}`}
            alt="green iguana"
          />
          <CardContent>
          <Typography variant="caption" lineHeight={1.2} component="div">
              Name:
            </Typography>
          <Typography gutterBottom lineHeight={1.2} variant="subtitle1" component="div">
              {user.name}
            </Typography>
            <Typography variant="caption" lineHeight={1.2} component="div">
              Position:
            </Typography>
            <Typography lineHeight={1.2} gutterBottom={false} variant="subtitle2" component="div">
              {user.description}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              Rating: ({user.liked})
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
    </Grid >

  );
}