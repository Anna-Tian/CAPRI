import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/committeeStyle.js";


import CommitteeInfo from "data/committeeInfo.js";
import { withStyles } from "@material-ui/core";


class CommitteeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      committeeName: null,
      committeeDescription: null,
    };
  }

  handleClose = () => {
    this.setState({showDetails: false});
    
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Steering Committee</h2>
        <hr className={classes.hr}></hr>
        <div>
          <GridContainer spacing="3">
            {CommitteeInfo.map((info) =>{
            return <GridItem xs={12} sm={12} md={3} className={classes.itemGrid}>
              <div className={classes.img}>
                <img src={info.CommitteeImg} className={classes.imageClasses} />
                <div onClick={() => this.setState({
                  showDetails: true,
                  committeeName: `${info.CommitteeName}`,
                  committeeDescription: `${info.CommitteeDescription}`
                })} className={classes.imgName}>{info.CommitteeName}</div>
              </div>
            </GridItem>
          })} 

          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal
            }}
            open={this.state.showDetails}
            keepMounted
            onClose={this.handleClose}
          >
            <DialogTitle>
              <h4 className={classes.modalTitle}>{this.state.committeeName}</h4>
            </DialogTitle>

            <DialogContent className={classes.modalBody}>
              <p>{this.state.committeeDescription}</p>
            </DialogContent>

            <DialogActions className={classes.modalFooter}>
              <Button onClick={this.handleClose} round className={classes.closeButton} >Close</Button>
            </DialogActions>
          </Dialog>

          </GridContainer>
        </div>

      </div>
    )
  }
}

export default withStyles(styles)(CommitteeSection);