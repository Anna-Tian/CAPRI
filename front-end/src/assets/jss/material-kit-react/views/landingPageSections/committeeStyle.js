import { cardTitle, title, hr } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";


const committeeStyle = {
  section: {
    padding: "70px 0",
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
  ...modalStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "2%",
  },
  imageClasses: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "50% !important",
    maxWidth: "100%",
    height: "auto",
    padding: "5%"
  },
  img: {
    padding: "5%"
  },
  imgName: {
    transition: ".5s ease",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "75%",
    height: "75%",
    padding: "30% 0%",
    background: "black",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    borderRadius: "50%",
    fontWeight: "600",
    "&:hover": {
      opacity: ".5"
    },
    cursor: "pointer",
    fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  closeButton: {
    color: "#29a8df",
    backgroundColor: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#29a8df"
    }
  }
};

export default committeeStyle;
