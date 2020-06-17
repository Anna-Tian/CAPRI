import { title, hr } from "assets/jss/material-kit-react.js";


const participateStyle = {
  section: {
    padding: "70px 0px",
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
  cardContent: {
    textAlign: "justify",
    alignSelf: "center"
  },
  imageClasses: {
    width: "100%",
    height: "100%"
  },
  questionnaireBtn: {
    width: "100%",
    color: "white",
    backgroundColor: "#EB1C69",
    textTransform: "none",
    "&:hover,&:focus": {
      color: "white",
      backgroundColor: "#EB1C69"
    }
  }
};

export default participateStyle;