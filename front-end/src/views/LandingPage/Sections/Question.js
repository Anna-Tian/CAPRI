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


const useStyles = makeStyles(styles);

export default function Question() {
 
  function handleEdit(e){    
    document.getElementById("info").style.display="none";
    document.getElementById("question").style.display="";
  }
  function handleEdit2(e){    
    document.getElementById("info").style.display="";
    document.getElementById("question").style.display="none";
  }
  const classes = useStyles();
  return (
    <Parallax filter image={require("assets/img/backgroundthree.jpg")} style={{height:'100vh'}}>
        <div className={classes.container}>
          
        <GridContainer>
            <GridItem id="info" xs={12} sm={12} md={12}>
              <h1 style={{textAlign:'center', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}}>Collaborative Australian</h1>
              <h1 style={{textAlign:'center', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}}>Physioterapy Research Initiative</h1>
              <h4 style={{textAlign:'center', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}}>
                Building Research Capicity
              </h4>
            </GridItem> 
            <GridContainer id="question" style={{display:'none', margin: '5% 5% 0'}} justify="space-between">             
              <GridItem xs={12} sm={12} md={6}>
                <form>
                    <fieldset>
                      <legend className={classes.legendMiddle}>Participants</legend>
                      <div>The CAPRI is designed as a collaborative Practice Based Research Network (PBRN) that enables interested researchers and clinicians to undertake practice-based research relevant for the profession, patients and society. The CAPRI database consists of information gathered from physiotherapist using an online questionnaire. The data gathered will form a database, the CAPRI database, that can be used to facilitate various research questions.</div> 
                  </fieldset>
                </form>
              </GridItem>  
              <GridItem xs={12} sm={12} md={6}>
                <form>
                    <fieldset>
                      <legend className={classes.legendMiddle}>Researchers</legend>
                      <div>CAPRI is a collaborative Practice Based Research Network (PBRN) that enables interested researchers nationally and internationally to use the CAPRI database for their research question, whether it is using the questionnaire data itself or via recruitment of physiotherapists or patients for your research projects. CAPRI can accommodate both qualitative and quantitative research and examination of the efficacy, effectiveness, safety and cost evaluation of aspects of physiotherapy care. The CAPRI database consists of practitioner-based information gathered using an online questionnaire. Please see the questionnaire to get an idea of the data that is available (CAPRI baseline questionnaire).</div>   
                  </fieldset>
                </form>
              </GridItem>
            </GridContainer>

            <GridItem xs={12} sm={12} md={12} style={{
                  textAlign:'center',
                  clear:'both',
                  position: 'absolute',
                  bottom: '50px',
                  left: '-12px'
                  }}>

                  <a href="https://www.surveygizmo.com/s3/5634271/Capri-Questionnaires" className={classes.link} onMouseOver={handleEdit} onMouseOut={handleEdit2}>
                    <Button color="primary" style={{backgroundColor:'#EB1C69',borderRadius:'10px', fontFamily:'Arial Rounded MT Bold, Helvetica, sans-serif'}} >
                      Questionnaire
                    </Button>
                  </a>
                 
              </GridItem>  
          </GridContainer>
          

        </div>
      </Parallax>
  );
}
