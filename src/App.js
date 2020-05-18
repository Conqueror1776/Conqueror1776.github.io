import AboutMe from './Components/AboutMe.js';
import BurgerBar from './Components/BurgerBar.js';
import Contacts from './Components/Contacts.js'
import HeaderPage from './Components/HeaderPage.js';
import Projects from './Components/Projects.js'

import './App.css';
import {AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography}  from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import React from 'react';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'black',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },

}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Elijah Tamarchenko
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <BurgerBar />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <HeaderPage />
        <AboutMe />
        <Projects />
        <Contacts />
      </main>
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
          <a href="#name" onClick={handleDrawerClose}>
            <ListItem button key="Home">
              <ListItemText margin='30px 30px' primary="Home" />
            </ListItem>
          </a>
          <a href="#about-me" onClick={handleDrawerClose}>
            <ListItem button key="About Me">
              <ListItemText margin='30px 30px' primary="About Me" />
            </ListItem>
          </a>
          <a href="#projects">
            <ListItem button key="Projects" onClick={handleDrawerClose}>
              <ListItemText margin='30px 30px' primary="Projects" />
            </ListItem>
          </a>
          <a href="#contact">
            <ListItem button key="Contact Me" onClick={handleDrawerClose}>
              <ListItemText margin='30px 30px' primary="Contact Me" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </div>
  );
}
