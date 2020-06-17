import React, { Component } from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/JoinStyle.js";

import { withStyles } from "@material-ui/core";
import { card } from "assets/jss/material-kit-react";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import Button from "components/CustomButtons/Button.js";

import qrCode from "assets/img/QR Code.png"
import { Link } from "react-router-dom";



class ParticipateSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>How Can I Join CAPRI?</h2>
        <hr className={classes.hr}></hr>
        <Card>
            <CardBody>
          <GridContainer justify="space-between">
              <GridItem xs={12} sm={12} md={9} className={classes.cardContent}>
                <div>
                  Participation is easy. Please see the links to the information sheet, 
                  the questionnaire and the database consent form.
                </div>
                <p></p>
                <div>
                  When you have filled in the CAPRI practitioner questionnaire you will see the 
                  opportunity to join the CAPRI practitioner database by signing the database consent form.
                </div>
                <p></p>
                <div>
                  If you agree to be included in the CAPRI practitioner database, your details will 
                  be entered into the password protected database and your responses to the accompanying 
                  CAPRI practitioner questionnaire will be stored.
                </div>
                <div>
                  Your information will inform the possible engagement for further sub-studies 
                  on specific topics and issues in physiotherapy care. To clarify: your consent 
                  to be included in the practitioner database does not automatically lead to your 
                  involvement in any future sub-studies. Your involvement in future sub-studies will 
                  be entirely at your discretion and you will be able to decide to participate or not 
                  participate in future sub-studies on a study-by-study basis and with no consequence to you.
                </div>
                <p></p>
                <div>
                  If you still have questions or would like to discuss your participation in more 
                  detail please let us know by email at capri@uts.edu.au.
                </div>
                <p></p>
                <div>
                  For more information please see the information sheet.
                </div>
                <p></p>
                <div>
                  For more information related to practitioners, see FAQs
                </div>

                
              </GridItem>
              <GridItem xs={12} sm={12} md={3} className={classes.cardContent}>
                <GridItem xs={12} sm={12} md={12}>
                  <Button className={classes.questionnaireBtn} round>Information Sheet</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button className={classes.questionnaireBtn} round>Questionnaire</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button className={classes.questionnaireBtn} round>Database Consent Form</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <Button className={classes.questionnaireBtn} round>FAQs</Button>
                </GridItem>
              </GridItem>
          </GridContainer>
            </CardBody>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ParticipateSection);