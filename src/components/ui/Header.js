import React, { useState, useEffect, useMemo } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs  from "@material-ui/core/Tabs";
import Tab  from "@material-ui/core/Tab";
import Button  from "@material-ui/core/Button";
import Menu  from "@material-ui/core/Menu";
import MenuItem  from "@material-ui/core/MenuItem";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";


import logo  from '../../assets/logo.svg';

// Adds shadow effect to the header when user scrolls the page
function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1.25em",
        },
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down('md')]: {
            height: "7em",
        },
        [theme.breakpoints.down('xs')]: {
            height: "5.5em",
        },
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
      },

    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },
        "&.Mui-selected": {       // this is to refer to the prop provided by M-UI
            borderBottom: `2px solid ${theme.palette.common.orange}`,
            opacity: 1,
          },
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
      },
      drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
      drawer: {
        backgroundColor: theme.palette.common.blue,
      },
      drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
      },
      drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
      },
      drawerItemSelected: {
        borderBottom: `2px solid ${theme.palette.common.orange}`,
        "& .MuiListItemText-root": {
          opacity: 1,
        }
      },
      appbar: {
        zIndex: theme.zIndex.modal + 1,
      }
  }))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (e, value) => {
        props.setTabindex(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpen(false)
        props.setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    const routes = useMemo(() => { 
        return [
        { name: "Home", link: "/", activeIndex: 0 },
        {
          name: "Services",
          link: "/services",
          activeIndex: 1,
          ariaOwns: anchorEl ? "simple-menu" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: event => handleClick(event)
        },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 }
      ]}, [anchorEl]);

    const menuOptions = useMemo(() => {
    return [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        {
          name: "Custom Software Development",
          link: "/customsoftware",
          activeIndex: 1,
          selectedIndex: 1
        },
        {
          name: "iOS/Android App Development",
          link: "/mobileapps",
          activeIndex: 1,
          selectedIndex: 2
        },
        {
          name: "Website Development",
          link: "/websites",
          activeIndex: 1,
          selectedIndex: 3
        }
    ]}, []);

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
              case `${route.link}`:
                if (props.tabIndex !== route.activeIndex) {
                  props.setTabindex(route.activeIndex);
                  if (
                    route.selectedIndex &&
                    route.selectedIndex !== props.selectedIndex
                  ) {
                    props.setSelectedIndex(route.selectedIndex);
                  }
                }
                break;
              case "/estimate":
                props.setTabindex(routes.length + 1);
                break;
              default:
                break;
            }
          });

      }, [props.tabIndex, props.selectedIndex, routes, menuOptions, props ])

      const tabs = (
        <React.Fragment>
            <Tabs value={props.tabIndex} className={classes.tabContainer} onChange={handleChange}>
                {routes.map((route, index) => (
                    <Tab
                    key={route.link} 
                    className={classes.tab}
                    component={Link}
                    to={route.link} 
                    label={route.name}
                    aria-owns={route.ariaOwns}
                    aria-haspopup={route.ariaPopup}
                    onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} component={Link}  to="/estimate" onClick={() => props.setTabindex(routes.length + 1)}>Free Estimate</Button>
            <Menu 
             id="simple-menu"
             classes={{paper: classes.menu}} 
             anchorEl={anchorEl} 
             open={open} 
             onClose={handleClose} 
             MenuListProps={{onMouseLeave: handleClose}}
             elevation={0}
             style={{zIndex:1302}}
             keepMounted
             >
             {menuOptions.map((option, i) => (
                <MenuItem
                key={i} 
                onClick={(event) => {handleMenuItemClick(event, i); handleClose(); props.setTabindex(1)}} 
                component={Link} 
                to={option.link} 
                classes={{root: classes.menuItem}} 
                selected={i === props.selectedIndex && props.tabIndex === 1}>
                {option.name}</MenuItem>
                ))}
            </Menu> 
        </React.Fragment>
      )
      const drawer = (
        <React.Fragment>
          <SwipeableDrawer
            disableSwipeToOpen={false} 
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{ paper: classes.drawer }}
          >
            <div className={classes.toolbarMargin}></div>
            <List disablePadding>
                {routes.map( route => (
                    <ListItem 
                    key={route.link}
                    onClick={() => {setOpenDrawer(false); props.setTabindex(route.activeIndex)}} 
                    divider
                    button
                    component={Link} 
                    to={route.link}
                    selected={props.tabIndex === route.activeIndex}
                    classes={{selected: classes.drawerItemSelected}}
                    >
                        <ListItemText classes={{root: classes.drawerItem}} disableTypography>
                            {route.name}
                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem 
                selected={props.tabIndex === 5} 
                onClick={() => {setOpenDrawer(false); props.setTabindex(5)}} 
                divider button  
                component={Link}
                 to="/estimate" 
                 classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}>
                    <ListItemText className={classes.drawerItem} disableTypography>
                        Free Estimate
                    </ListItemText>
                </ListItem>
            </List>
          </SwipeableDrawer>
          <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
          >
            <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </React.Fragment>
      );

    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                    <Button component={Link} to="/" className={classes.logoContainer} onClick={() => props.setTabindex(0)} disableRipple>
                        <img alt="logo" src={logo} className={classes.logo} />
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>

    );
}