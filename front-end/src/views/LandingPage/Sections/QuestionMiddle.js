import React from "react";

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/QuestionStyle.js";
import Background from "assets/img/backgroundtwo.jpg";
import CAPRI_Form from "assets/img/CAPRI_Form.png";

const useStyles = makeStyles(styles);

export default function QuestionMiddle() {
 
  function handleEdit(e){    
    document.getElementById("info").style.display="none";
    document.getElementById("question").style.display="";
  }
  const classes = useStyles();
  return (
    <div className={classes.section} style={{color:'white',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',width:'100%',backgroundImage: `url(${Background})` }}>
        <GridContainer style={{
            width:'100%',
            margin:'auto',
            background: 'rgba(0, 0, 0, 0.3)'
        }}>

          <GridItem xs={12} sm={12} md={8} style={{marginTop:"3%", marginBottom:"3%"}}>
            <GridItem xs={12} sm={12} md={12} >
                <form>
                    <fieldset>
                      <legend className={classes.legendMiddle}>Participants</legend>
                      <div style={{fontFamily:'Arial Rounded MT, Helvetica, sans-serif'}}>The CAPRI is designed as a collaborative Practice Based Research Network (PBRN) that enables interested researchers and clinicians to undertake practice-based research relevant for the profession, patients and society. The CAPRI database consists of information gathered from physiotherapist using an online questionnaire. The data gathered will form a database, the CAPRI database, that can be used to facilitate various research questions.</div> 
                  </fieldset>
                </form>
            </GridItem>
            

            <GridItem xs={12} sm={12} md={12}>
                <form>
                    <fieldset>
                      <legend className={classes.legendMiddle}>Researchers</legend>
                      <div style={{fontFamily:'Arial Rounded MT, Helvetica, sans-serif'}}>CAPRI is a collaborative Practice Based Research Network (PBRN) that enables interested researchers nationally and internationally to use the CAPRI database for their research question, whether it is using the questionnaire data itself or via recruitment of physiotherapists or patients for your research projects. CAPRI can accommodate both qualitative and quantitative research and examination of the efficacy, effectiveness, safety and cost evaluation of aspects of physiotherapy care. The CAPRI database consists of practitioner-based information gathered using an online questionnaire. Please see the questionnaire to get an idea of the data that is available (CAPRI baseline questionnaire).</div>   
                  </fieldset>
                </form>
            </GridItem>

          </GridItem>

          <GridItem xs={12} sm={12} md={4} style={{margin: "auto"}}>
              <GridItem xs={12} sm={12} md={12} className={classes.qrcodeImg}>
                  <p style={{fontSize:'18px', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}}>Scan QR code to the Questionnaire</p>
                  
                  <img src={CAPRI_Form} style={{width:'200px',height:'200px'}}/>
              </GridItem>
               

              <GridItem xs={12} sm={12} md={12} className={classes.qrcodeBtn}>
                  <a href="https://www.surveygizmo.com/s3/5634271/Capri-Questionnaires" className={classes.link} onMouseOver={handleEdit}>
                    <Button color="primary" style={{backgroundColor:'#EB1C69',borderRadius:'10px', width:'100%', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}} >
                      Questionnaire
                    </Button>
                  </a>
                 
              </GridItem> 
          </GridItem>
          
        </GridContainer>
      </div>
  );
}
