/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { primaryColor } from "assets/jss/material-kit-react";

import iconEmail from "assets/img/icon_email.png";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  // const navMenuSelect = () => {
      
  // };
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showLine: "block"
  //   }
  // }

  return (

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        /> */}
        <NavLink to="/home-page" activeStyle={{color: primaryColor}} className={classes.navLink}>
          {/* <Button
            // href="http://localhost:3000"
            color="transparent"
            target="_blank"
            className={classes.navLink}
            > Home
          </Button> */}Home
        </NavLink>
        <div 
          className={classes.navLine}
          // style={{display:this.state.showLine}}
          ></div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/participants-page" activeStyle={{color: primaryColor}} className={classes.navLink}>
          For Participants
        </NavLink>
        <div className={classes.navLine}></div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/researchers-page" activeStyle={{color: primaryColor}} className={classes.navLink}>
          For Researchers
        </NavLink>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <NavLink to="/advisors-page" activeStyle={{color: primaryColor}} className={classes.navLink}>
          Advisors
        </NavLink>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/* <NavLink to="/admin-login" activeStyle={{color: primaryColor}} className={classes.navLink}> */}
        <a href="https://app.surveygizmo.com/login/v1" target="_blank" activeStyle={{color: primaryColor}} className={classes.navLink}>
          For Admin
        </a>
      </ListItem>

      <ListItem className={classes.listItem}>
        
        <span className={classes.contact}>
          <img 
              src={iconEmail}
              alt="..."
              className={classes.logo}></img>capri@uts.edu.au</span>
      </ListItem>
    </List>
  );
}
