import { container, primaryColor, whiteColor} from "assets/jss/material-kit-react.js";

const footerStyle = {
  // block: {
  //   color: whiteColor,
  //   paddingBottom: "2px",
  //   fontWeight: "500",
  //   fontSize: "18px",
  //   fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
  //   // textTransform: "uppercase",
  //   borderRadius: "3px",
  //   textDecoration: "none",
  //   position: "relative",
  //   display: "block",
  //   "&:hover": {
  //     color: whiteColor,
      
  //   }
  // },
  // left: {
  //   float: "left!important",
  //   display: "block",
  //   paddingLeft: "5%",
  //   paddingTop: "96px"
  // },
  block: {
    color: whiteColor,
    paddingBottom: "2px",
    fontWeight: "500",
    fontSize: "18px",
    fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
    // textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    paddingLeft: "0",
    "&:hover": {
      color: whiteColor,
      
    }
  },
  left: {
    float: "left!important",
    display: "block",
    paddingLeft: "5%",
    paddingTop: "80px"
  },
  middle: {
    marginTop: "-96px",
    paddingBottom: "6rem",
    textAlign: "-webkit-center"
  },
  // middle: {
  //   marginTop: "-96px",
  //   paddingBottom: "3.5rem",
  //   textAlign: "-webkit-center"
  // },
  // right: {
  //   padding: "15px 0",
  //   margin: "0",
  //   float: "right!important",
  //   position: "relative",
  //   marginTop: "-180px",
  //   paddingRight: "15%"  
  // },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
    position: "relative",
    marginTop: "-80px",
    paddingRight: "15%"  
  },
  bottom: {
    position: "relative",
    backgroundColor: "#000000",
    textAlign: "left"
  },
  footer: {
    paddingTop: "3.5rem",
    textAlign: "center",
    // display: "flex",
    zIndex: "4",
    position: "relative",
    backgroundColor: primaryColor
  },
  a: {
    color: whiteColor,
    fontSize: "25px",
    textAlign: "left",
    fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    color: whiteColor,
    paddingTop: "1.4rem",
    paddingBottom: "1.4rem",
    paddingLeft: "0",
    paddingRight: "2.8rem",
    fontWeight: "500",
    fontSize: "50px",
    position: "relative",
    display: "block",
    "&:hover,&:focus": {
      // color: "#000000"
      // color: orangeColor
      // color: "#ffffff70"
      color: "#6d6d6d80"
    }
  },
  division: {
    width: "1px",
    height: "105px",
    marginTop: "15px",
    borderRight: "1px dashed #FFFFFF"
  },
  copyright: {
    color: whiteColor,
    padding: "5px",
    fontSize: "14px",
    fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
  }
};
export default footerStyle;
