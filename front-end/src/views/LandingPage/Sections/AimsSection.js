import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";


import aim1 from "assets/img/aims/aims1.png";
import aim2 from "assets/img/aims/aims2.png";
import aim3 from "assets/img/aims/aims3.png";
import aim4 from "assets/img/aims/aims4.png";
import aim5 from "assets/img/aims/aims5.png";
import aim6 from "assets/img/aims/aims6.png";
import styles from "assets/jss/material-kit-react/views/landingPageSections/aimStyle.js";

const useStyles = makeStyles(styles);


export default function AimsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      
         
          <p className={classes.quote_1}>"</p>
          <p className={classes.aim} >
            To enable, facilitate and coordinate high quality practice based, patient relevant/centred
             physiotherapy research, with effective engaement of the physiotherapy community.
          </p>
          <p className={classes.quote_2}>"</p>
          <div className={classes.quote_3}>
              ---From CAPRI
          </div>
        {/* </GridItem>
      </GridContainer> */}
      <div>
        <GridContainer>
    
          <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim1}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={10} className={classes.container}>
                    <div className={classes.capital}>F</div>
                    <div className={classes.content}>oster and conduct research that is practice and patient relevant</div>

                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.divider_ver1} />
                </GridItem>
        
            </GridContainer>
            
        
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1}>
                    <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim2}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={10} className={classes.container}>
                    <div className={classes.capital}>M</div>
                    <div className={classes.content}>ake use of rigorous scientific research results to inform patient care</div>
          
          
          
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.divider_ver1} />
                </GridItem>
        
            </GridContainer>
        
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim3}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={11} className={classes.container}>
                    <div className={classes.capital}>T</div>
                    <div className={classes.content}>o facilitate a sustainable research culture</div>
          
          
                </GridItem>
        
            </GridContainer>
        
        </GridItem>
        
    </GridContainer>
    <div className={classes.divider} />
   
    <GridContainer className={classes.below}>   
        <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1} className={classes.icon}>
                <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim4}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={10} className={classes.container}>
                    <div className={classes.capital}>T</div>
                    <div className={classes.content}>o accommodate research network building</div>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.divider_ver2} />
                </GridItem>
        
            </GridContainer>
        
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim5}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={10} className={classes.container}>
                    <div className={classes.capital}>F</div>
          
                    <div className={classes.content}>acilitate collaborations between patients, phsiotherapists and researchers</div>
          
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.divider_ver2} />
                </GridItem>
        
            </GridContainer>
        
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={1}>
                <div className={classes.circle}>
                    <img
                        alt="..."
                        src={aim6}
                        className={classes.img}/>
                    </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={11} className={classes.special}>
                    <div className={classes.capital}>E</div>
                    <div className={classes.content}>stablish a sustainable, national database for physiotherapy research in Australia for future applications an funding</div>
                </GridItem>
        
            </GridContainer>
        
        </GridItem>
        
        </GridContainer>

        {/* <GridContainer >
          <GridItem xs={12} sm={12} md={4}>
          
            
            <div className={classes.container}>
            <img
                alt="..."
                src={circle}
                className={classes.img}/>
                </div>
            </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <div className={classes.container}>
            <div className={classes.title}>F</div>
            <div className={classes.content}>oster and conduct research that is practice and patient relevant</div>
          </div>
            
          </GridItem>
          </GridContainer> */}
      </div>
    </div>
  );
}