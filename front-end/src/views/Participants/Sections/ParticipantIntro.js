import React, { Component } from "react";

// core components
import styles from "assets/jss/material-kit-react/views/participantPage.js";

import { withStyles } from "@material-ui/core";

import participantIntroImg from "assets/img/participantIntroy.jpg"



class ParticipateIntro extends Component {
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
        <h2 className={classes.title} >What is CAPRI for Participants?</h2>
        <div className={classes.introDiv} >
          <div className={classes.introContent}>
            The CAPRI is designed as a collaborative Practice Based Research Network (PBRN) that enables interested researchers and clinicians to undertake practice-based research relevant for the profession, patients and society. The CAPRI database consists of information gathered from physiotherapist using an online questionnaire. The data gathered will form a database, the CAPRI database, that can be used to facilitate various research questions.
            <br></br><br></br>
            The participation of physiotherapists is essential to the delivery and success of CAPRI. All physiotherapists across Australia are invited to participate (see “How can I participate in CAPRI”).
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ParticipateIntro);