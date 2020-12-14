import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Section2 from "./Sections/Section2.js";
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
import Section5 from "./Sections/Section5.js";
import ReactFullpage from '@fullpage/react-fullpage';

const useStyles = makeStyles(styles);

const anchors = ["home", "profile", "project", "detail", "contact"];

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.main}>
      <ReactFullpage
        anchors={anchors}
        navigation
        scrollingSpeed={500}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div>
                  <Header
                    brand="👋 Shalon Teoh"
                    rightLinks={<HeaderLinks fullpageApi={fullpageApi} />}
                    absolute
                    color="transparent"
                    changeColorOnScroll={{
                      height: 400,
                      color: "white"
                    }}
                    {...rest}
                  />
                  <Parallax className={classes.mainContainer}>
                    <div className={classes.container}>
                      <GridContainer className={classes.subContainer}>
                        <GridItem>
                          <div className={classes.brand}>
                            <h2 className={classes.title}>Shalon Teoh —</h2>
                            <h2 className={classes.subtitle}>developer from<br />Penang Malaysia</h2>
                          </div>
                        </GridItem>
                        <GridItem>
                          <div className={classes.socialIconsContainer}>
                            <Button
                              color="transparent"
                              href="https://www.linkedin.com/in/shalonteohsinyong"
                              target="_blank"
                              className={classes.socialIcons}
                            >
                              <img className={classes.socialIcons} src={require("assets/img/linkedin.png")} />
                            </Button>
                            <Button
                              color="transparent"
                              href="https://github.com/shalonteoh"
                              target="_blank"
                              className={classes.socialIcons}
                            >
                              <img className={classes.socialIcons} src={require("assets/img/github.png")} />
                            </Button>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <GridContainer className={classes.subContainer}>
                        <GridItem>
                          <img className={classes.image} src={require("assets/img/bg2.png")} />
                        </GridItem>
                      </GridContainer>
                    </div>
                  </Parallax>
                </div>
              </div>


              <div className="section">
                <Section2 />
              </div>

              <div className="section">
                <Section3 />
              </div>

              <div className="section">
                <Section4 />
              </div>

              <div className="section">
                <Section5 />
                <Footer fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
