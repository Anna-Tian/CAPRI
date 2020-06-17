import React, { Component } from "react";

// core components
import styles from "assets/jss/material-kit-react/views/participantPage.js";

import { withStyles } from "@material-ui/core";

class ResearchBenefits extends Component {
  constructor(){
    super();
    //this.moreExample = this.moreExample.bind(this);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.sectionBenefit}>
        <h2 className={classes.title}>Benefits for Researchers</h2>
        <hr className={classes.hr}></hr>
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".timeline {  position: relative;  max-width: 1200px;  margin: 0 auto;}"+
                ".timeline::after {  content: '';  position: absolute;   top: 0;  bottom: 0;  border:1px dashed #b7b7b7;}"+
                ".container {  padding: 10px 40px;  position: relative;  background-color: inherit;  width: 50%; border-bottom: 50px}"+
                ".container::after {  content: '';  position: absolute;  width: 30px;  height: 30px;  right: -19px;  background-color: #29A8DF;  border: 4px solid #29A8DF;  top: 20px;  border-radius: 50%;  z-index: 1;}"+
                ".left {  left: 0;}.right {  left: 50%;}"+
                ".left::before {  content: \" \";  height: 0;  position: absolute;  top: 35%;  width: 0;  z-index: 1;  right: 30px;  border: medium solid black;  border-width: 10px 0 10px 10px;  border-color: transparent transparent transparent white;}"+
                ".right::before {  content: \" \";  height: 0;  position: absolute;  top: 35%;  width: 0;  z-index: 1;  left: 30px;  border: medium solid black;  border-width: 10px 10px 10px 0;  border-color: transparent white transparent transparent;}"+
                ".right::after {  left: -18px;}"+
                ".content { background-color: white;  position: relative;  border-radius: 22px; border: 2px solid #7b9ed4; text-align: left; padding-left: 15px; padding-top:5px; margin-left:10%; margin-right: 10%; width:80%;}"
            }}
          />
          <div style={{paddingBottom: 50}}>
            <div className="timeline">
              <div className="container left">
                <div className="content">
                  <p>
                    Maximise cost efficiency and time savings particularly regarding project start-up (including recruitment and access);
                  </p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <p>
                    Build upon the established CAPRI branding and marketing activities;
                  </p>
                </div>
              </div>
              <div className="container left">
                <div className="content">
                  <p>
                    Draw upon an established large-scale national network of committed practitioners aiding coverage, recruitment and retention of participants and strengthening the validity and impact of your research;
                  </p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <p>
                    Gain additional expert advice and input from the CAPRI Steering Committee (as required and/or requested).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ResearchBenefits);