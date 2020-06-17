import { container, title } from "assets/jss/material-kit-react.js";

const questionStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  legendMiddle: {
    margin: "auto",
    fontSize: "28px",
    fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif',
    padding: "5px"
  },
  qrcodeImg: {
    margin: "5% auto 10%",
    width: "80%",
    padding: "10% 5%",
    backgroundColor:'rgba(238,238,224,0.3)',
    textAlign:'center'
  },
  qrcodeBtn: {
    width: "70%",
    margin: "auto"
  }
};

export default questionStyle;
