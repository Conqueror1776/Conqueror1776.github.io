import React from 'react';
import './Styling/SideBar.css';

function SideBar() {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Home', 'About Me', 'Projects', 'Contact Me'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText margin='30px 30px' primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
