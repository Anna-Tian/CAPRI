import React, { Component } from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/collaboratorStyle.js";

import CollaboratorInfo from "data/collaboratorInfo.js";
import { withStyles } from "@material-ui/core";


class CollaboratorSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Collaborators</h2>
        <hr className={classes.hr}></hr>
        <div className={classes.imgSection}>
          <GridContainer >
            {CollaboratorInfo.map((info) =>{
              return <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
                <img src={info.CollaboratorImg} className={classes.imageClasses} />
              </GridItem>
            })} 
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollaboratorSection);