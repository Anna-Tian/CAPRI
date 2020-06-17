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
import ResearchIntro from "./Sections/ResearchIntro.js";
import ResearchBenefits from "./Sections/ResearchBenefits.js";
import ResearchJoin from "./Sections/ResearchJoin.js";

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
          <ResearchIntro/>
          <ResearchBenefits />
          <ResearchJoin/>
        </div>
      </div>
      <Footer />
    </div>
  );
}