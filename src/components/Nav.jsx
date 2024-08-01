import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['About', 'Discover', 'Services', 'Contact'];

  const Logo = () => (
    <Typography
      variant="h6"
      style={{
        marginLeft: 20,
        flexGrow: 1,
        textAlign: 'center',
        fontSize: '2rem', // Increase font size
        fontWeight: 'bold', // Make text bold
        letterSpacing: '0.1rem', // Add space between letters
        color: 'white', // Highlight text color
      }}
    >
      GAMAN
    </Typography>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Logo />
            </>
          ) : (
            <>
              <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                {menuItems.slice(0, 2).map((item) => (
                  <Typography
                    variant="h6"
                    key={item}
                    style={{ margin: '0 60px', fontSize: '1.25rem', color: 'white' }} // Increased margin and font size
                  >
                    {item}
                  </Typography>
                ))}
                <Logo />
                {menuItems.slice(2).map((item) => (
                  <Typography
                    variant="h6"
                    key={item}
                    style={{ margin: '0 60px', fontSize: '1.25rem', color: 'white' }} // Increased margin and font size
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            </>
          )}
          {isMobile && (
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};



export default Nav;