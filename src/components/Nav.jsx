// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
  // Import App.css here
  

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <StyledLink to="/about">About</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledLink to="/discover">Discover</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledLink to="/services">Services</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledLink to="/contact">Contact</StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <StyledLink to="/">Gaman</StyledLink>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop Menu */}
        <div className="nav-bar">
          {/* Left Side */}
          <div className="nav-left">
            <StyledLink to="/about">
              <Button color="inherit">About</Button>
            </StyledLink>
            <StyledLink to="/discover">
              <Button color="inherit">Discover</Button>
            </StyledLink>
          </div>

          {/* Center */}
          <div className="nav-center">
            <StyledLink to="/">
              <Button color="inherit">Gaman</Button>
            </StyledLink>
          </div>

          {/* Right Side */}
          <div className="nav-right">
            <StyledLink to="/services">
              <Button color="inherit">Services</Button>
            </StyledLink>
            <StyledLink to="/contact">
              <Button color="inherit">Contact</Button>
            </StyledLink>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
