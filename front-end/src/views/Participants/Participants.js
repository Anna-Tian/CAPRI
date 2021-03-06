import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ParticipantIntro from "./Sections/ParticipantIntro.js";
import ParticipantBenefits from "./Sections/ParticipantBenefits.js";
import ParticipateJoin from "./Sections/ParticipateJoin.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Participants(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Participants"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ParticipantIntro/>
          <ParticipantBenefits />
          <ParticipateJoin />
        </div>
      </div>
      <Footer />
    </div>
  );
}
