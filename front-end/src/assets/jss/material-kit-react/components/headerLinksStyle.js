import { defaultFont, primaryColor, grayColor} from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: grayColor,
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "18px",
    fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus, &.active": {
      color: primaryColor,
      // background: "rgba(200, 200, 200, 0.2)"
      // "& .navLine": {display:"block"}
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  contact: {
    color: grayColor,
    position: "relative",
    display: "inherit",
    padding: "0.9375rem",
    paddingLeft: "3rem",
    fontWeight: "400",
    fontSize: "15px",
    fontFamily: "Arial Rounded MT, Helvetica, sans-serif",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
  },
  logo: {
    width: "15px",
    marginRight: "5px"
  },
  navLine: {
    border: "1.5px solid #29A8DF",
    backgroundColor: "#29A8DF",
    borderRadius: "1.5px",
    width: "80%",
    marginLeft: "10%",
    display: "none"
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: primaryColor,
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
