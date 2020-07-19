import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import { burgundy } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    Navbar: {
      flexGrow: 1,
      background: "burgundy"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  
  const Navbar = props => {
    const classes = useStyles();
    // let loggedIn = document.cookie;
    return (
      <div>
        <AppBar className={classes.Navbar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              UCF
            </Typography>
            <ul id="navItemsContainer">
                <li className="navItems">
                  <Link to="/">Home</Link>
                </li>
            
              <li className="navItems">
                <Link to="/About">About</Link>
              </li>
  
              <li className="navItems">
                <Link to="/Blog">Blog</Link>
              </li>
              <li className="navItems">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default Navbar;