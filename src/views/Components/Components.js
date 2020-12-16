import React, { useState, useEffect } from "react";
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
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
import Section4a from "./Sections/Section4a.js";
import Section5 from "./Sections/Section5.js";
import ReactFullpage from '@fullpage/react-fullpage';
import classNames from "classnames";

const useStyles = makeStyles(styles);

const anchors = ["home", "project", "skilltool", "background", "contact"];

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []);

  return (
    <div className={classes.main}>
      <ReactFullpage
        licenseKey={null}
        anchors={anchors}
        navigation
        scrollingSpeed={500}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div>
                  <Header
                    brand={(
                      <div><i class="far fa-envelope"></i>{" "}shalonteoh@gmail.com</div>
                    )}
                    rightLinks={<HeaderLinks fullpageApi={fullpageApi} />}
                    absolute
                    color="transparent"
                    {...rest}
                  />
                  <Parallax >
                    <div className={classes.container}>
                      <div className={classes.content}>
                        <GridContainer>
                          <GridItem>
                            <img className={classes.image} src={require("assets/img/bg2.png")} alt="bg2" />
                          </GridItem>
                        </GridContainer>
                        <GridContainer className={classes.marginTop}>
                          <GridItem>
                            <div className={classes.brand}>
                              <div className={classes.subtitle}>Hi, I’m Shalon 🤘</div>
                              <div className={classNames(classes.title, classes.marginTop)}>Build apps for mobile and web</div>
                              <div className={classNames(classes.subtitle, classes.marginTop)}>a <b>Full Stack Developer</b> in Penang, Malaysia.
I specialized in mobile back-end and responsive website development</div>
                            </div>
                          </GridItem>
                          <GridItem className={classes.marginTop}>
                            <div className={classes.socialIconsContainer}>
                              <Button
                                color="transparent"
                                href="https://www.linkedin.com/in/shalonteohsinyong"
                                target="_blank"
                                className={classes.socialIcons}
                              >
                                <img className={classes.socialIcons} src={require("assets/img/linkedin.png")} alt="linkedin" />
                              </Button>
                              <Button
                                color="transparent"
                                href="https://github.com/shalonteoh"
                                target="_blank"
                                className={classes.socialIcons}
                              >
                                <img className={classes.socialIcons} src={require("assets/img/github.png")} alt="github" />
                              </Button>
                              <Button
                                color="transparent"
                                href="https://stackoverflow.com/users/7862335/shalonteoh"
                                target="_blank"
                                className={classes.socialIcons}
                              >
                                <img className={classes.socialIcons} src={require("assets/img/stack-overflow.png")} alt="stack-overflow" />
                              </Button>
                            </div>
                          </GridItem>
                        </GridContainer>
                      </div>

                    </div>
                  </Parallax>
                </div>
              </div>

              <div className="section">
                <Section3 windowWidth={windowWidth} />
              </div>

              <div className="section">
                <Section4 />
              </div>

              <div className="section">
                <Section4a />
              </div>

              <div className="section">
                <Section5 />
                <Footer fullpageApi={fullpageApi} windowWidth={windowWidth} whiteFont />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
