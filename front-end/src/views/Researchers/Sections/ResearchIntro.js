import React, { Component } from "react";

// core components
import styles from "assets/jss/material-kit-react/views/participantPage.js";

import { withStyles } from "@material-ui/core";

import participantIntroImg from "assets/img/ResearcherIntro.jpg"



class ResearchIntro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section} style={{color:'white',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',width:'100%',height:'600px',backgroundImage: `url(${participantIntroImg})` }}>
        {/* <h2 className={classes.title}>What is CAPRI for Participants?</h2>
        <hr className={classes.hr}></hr>
        <img src={participantIntroImg} align="left" className={classes.imageClasses} alt="Participants Introduction"/> */}
        <h2 className={classes.title} >What is CAPRI for Researchers?</h2>
        <div className={classes.introDiv} >
          <div className={classes.introContent}>
            CAPRI is a collaborative Practice Based Research Network (PBRN) that enables interested researchers nationally and internationally to use the CAPRI database for their research question, whether it is using the questionnaire data itself or via recruitment of physiotherapists or patients for your research projects. CAPRI can accommodate both qualitative and quantitative research and examination of the efficacy, effectiveness, safety and cost evaluation of aspects of physiotherapy care. The CAPRI database consists of practitioner-based information gathered using an online questionnaire. Please see the questionnaire to get an idea of the data that is available (CAPRI baseline questionnaire).
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ResearchIntro);