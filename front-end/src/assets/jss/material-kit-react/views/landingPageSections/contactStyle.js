import { title, hr, container} from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
const contactStyle = {
    section: {
      paddingTop: "70px",
      textAlign: "center",
      paddingBottom:"50px"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      hr,
      container,
      imgSection: {
        // backgroundColor: "#F4FBFE",
        
      },
      button:{
          background:"#29A8DF"
      },
      form: {
        margin: "0",
        // backgroundColor: "#F4FBFE"
       
      },
  
      cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
      },
      inputIconsColor: {
        color: "#495057"
      }
     
}
export default contactStyle;