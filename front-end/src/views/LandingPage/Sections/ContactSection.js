import React, { Component } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";


// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import CommentIcon from '@material-ui/icons/Comment';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { makeStyles } from "@material-ui/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";
import request from "data/httpHelper.js";
import { classicNameResolver } from "typescript";

const useStyles= makeStyles(styles);

export default function ContactSection(){
    const classes = useStyles();
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    function sendEmail() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let suggestion = document.getElementById("suggestion").value;
      if (name == "") {
        alert("Please input the name");
        return;
      }else if (email == "") {
        alert("Please input the email");
        return;
      }else if (suggestion == "") {
        alert("Please input the suggestion");
        return;
      }
      request({
        url: '/sendEmail',
        method: 'post',
        data: {
          "name": name,
          "email": email,
          "suggestion": suggestion
        }
      })
      alert("Thanks for your suggestion.");
    }
    return(
    <div className={classes.section}>
        <h2 className={classes.title}>Contact Us</h2>
        <hr className={classes.hr}></hr>
        <div className={classes.container}>
        <div className={classes.imgSection}>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Card className={cardAnimaton}>
                <form className={classes.form}>
                  <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                        labelText="Your Name..."
                        id="name"
                        
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "text",
                            
                            endAdornment: (
                            <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                            </InputAdornment>
                            )
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Provide your suggestions..."
                      id="suggestion"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline:true,
                        rows:6,
                        endAdornment: (
                          <InputAdornment position="end">
                           <CommentIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button className={classes.button} size="lg" onClick={sendEmail}>
                      Submit
                    </Button>
                  </CardFooter>
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        </div>
    
    </div>
    
    )  

}