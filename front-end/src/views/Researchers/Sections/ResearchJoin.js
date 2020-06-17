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
                  An <b>Expression of Interest (EOI)</b> process has been designed to help manage sub-study proposals. 
                  The invitation to collaborate and utilise the CAPRI-database is open to early-career and 
                  senior researchers, clinicians who may wish to partner in research activity as well as 
                  PhD students and potential PhD candidates looking to examine a specific area of physiotherapy.
                </div>
                <p></p>
                <div>
                  We encourage clinicians, researchers, PhD students, potential funders and others 
                  to submit an EOI sub-study proposal. Both national and international investigators 
                  are welcomed. EOI submissions will be subject to scientific review by the CAPRI 
                  Project Steering Committee to ensure quality, rigour, fit and other important criteria.
                </div>
                <p></p>
                <div>
                  Any interested researcher can submit aSub-study <b>Expression of Interest (EOI)</b> using 
                  the application form. For enquiries regarding a sub-study EOI application please 
                  feel free to contact us (capri@uts.edu.au).
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <GridItem xs={12} sm={12} md={12}>
                  <p>Scan QR code to the form👇</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <img src={qrCode} className={classes.imageClasses} />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button className={classes.questionnaireBtn} round>EOI Form</Button>
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