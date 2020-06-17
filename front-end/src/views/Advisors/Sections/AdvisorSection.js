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


import AdvisorInfo from "data/advisorInfo.js";
import { withStyles } from "@material-ui/core";


class AdvisorSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      advisorName: null,
      advisorDescription: null,
    };
  }

  handleClose = () => {
    this.setState({showDetails: false});
    
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}></h2>
        <div>
          <GridContainer spacing="3">
            {AdvisorInfo.map((info) =>{
            return <GridItem xs={12} sm={12} md={3} className={classes.itemGrid}>
              <div className={classes.img}>
                <img src={info.AdvisorImg} className={classes.imageClasses} />
                <div onClick={() => this.setState({
                  showDetails: true,
                  advisorName: `${info.AdvisorName}`,
                  advisorDescription: `${info.AdvisorDescription}`
                })} className={classes.imgName}>{info.AdvisorName}</div>
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
              <h4 className={classes.modalTitle}>{this.state.advisorName}</h4>
            </DialogTitle>

            <DialogContent className={classes.modalBody}>
              <p>{this.state.advisorDescription}</p>
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

export default withStyles(styles)(AdvisorSection);