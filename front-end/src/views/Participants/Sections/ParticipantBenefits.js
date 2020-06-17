import React, { Component } from "react";

// core components
import styles from "assets/jss/material-kit-react/views/participantPage.js";

import { withStyles } from "@material-ui/core";

//import ParticipantBenefitIcon from "assets/img/ParticipantBenefitIcon.jpg";
import moreExample from "assets/img/moreExample.png";

class ParticipateIntro extends Component {
  state = {
    showElem:'none',
    buttonElem:'true'
  };

  constructor(){
    super();
    //this.moreExample = this.moreExample.bind(this);
  }
  
  moreExample = () =>{
    this.setState({showElem: !this.state.showElem});
    this.setState({buttonElem: 'none'});
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.sectionBenefit}>
        <h2 className={classes.title}>Benefits for Participants</h2>
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

          <div className="timeline">
            <div className="container left">
              <div className="content">
                <p>
                  You actively contribute to and support ongoing studies focusing upon specific topics of your interest.
                </p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <p>
                  Your specific practice profile and experiences are counted in the CAPRI research projects.
                </p>
              </div>
            </div>
            <div className="container left">
              <div className="content">
                <p>
                  Your will play an important role in shaping the future research direction and outcomes of physiotherapist-focused research.
                </p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <p>
                  As a consenting participant you will receive the CAPRI newsletters and updates regarding different research projects to make sure you are up to date concerning evidence-based knowledge relevant for your care.
                </p>
              </div>
            </div>
          </div>
          
          <button onClick={this.moreExample} style={{display:this.state.buttonElem}} className={classes.moreExampleBtn}>
            More example
            <br></br>
            <img src={moreExample} className={classes.moreExampleImg} alt="More Example"/>
          </button>

          <div style={{display:this.state.showElem, paddingBottom: 50}}>
            <div className="timeline">
              <div className="container left">
                <div className="content">
                  <p>
                    How cost-efficient is physiotherapy care?
                  </p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <p>
                    What range of benefits do patients gain from their physiotherapy care?
                  </p>
                </div>
              </div>
              <div className="container left">
                <div className="content">
                  <p>
                    What is the safety and risk of physiotherapy care?
                  </p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <p>
                    What influences patient decision-making regarding physiotherapy consultations and follow-up care?
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

export default withStyles(styles)(ParticipateIntro);