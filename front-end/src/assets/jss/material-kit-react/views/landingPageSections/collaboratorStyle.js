import { title, hr } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";


const collaboratorStyle = {
  section: {
    paddingTop: "70px",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  hr,
  ...imagesStyle,
  imgSection: {
    backgroundColor: "#F4FBFE",
    padding:"3%"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "2%"
  },
  imageClasses: {
    // boxShadow:
    //   "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    // borderRadius: "50% !important",
    maxWidth: "100%",
    height: "auto",
    padding: "5%"
  }
  
};

export default collaboratorStyle;
