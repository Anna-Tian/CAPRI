/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

import ScrollToTop from "views/LandingPage/Sections/ScrollToTop.js"

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={aClasses}>Contact us</div>
          <List>
            {/* <ListItem className={classes.inlineBlock}>
              <a 
                href="#" 
                className={classes.icon}
                target="_blank"
              >
                <i className={"fab fa-facebook-square"}/>
              </a>
            </ListItem> */}
            {/* <ListItem className={classes.inlineBlock}>
            <a 
                href="#" 
                className={classes.icon}
                target="_blank"
              >
                <i className={"fab fa-twitter"}/>
              </a>
            </ListItem> */}
            {/* <ListItem className={classes.inlineBlock}>
            <a 
                href="#" 
                className={classes.icon}
                target="_blank"
              >
              <i className={"fab fa-instagram"}/>                
                <Email className={classes.icon} />  
              </a>      
            </ListItem> */}

            <ListItem className={classes.block}>
              <a
                className={classes.block}
                target="_blank"
              >
                E-mail: capri@uts.edu.au
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.middle}>
          <ScrollToTop></ScrollToTop>
          {/* <div className={classes.division}></div> */}
        </div>
        <div className={classes.right}>     
        <List className={classes.list}>
            <ListItem className={classes.block}>
              <a
                className={classes.block}
                target="_blank"
              >
                Address: CAPRI, Sydney, NSW
              </a>
            </ListItem>
            {/* <ListItem className={classes.block}>
              <a
                className={classes.block}
                target="_blank"
              >
                Tel: 61-00000000
              </a>
            </ListItem> */}
            {/* <ListItem className={classes.block}>
              <a
                className={classes.block}
                target="_blank"
              >
                E-mail: CAPRI@CAPRI.com
              </a>
            </ListItem> */}
        </List>
        </div>
        
      </div>
      <div className={classes.bottom}>
          <div className={classes.copyright}>&copy; {1900 + new Date().getYear()} - CAPRI. All rights reserved</div>
        </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
