import React, { useState, useEffect, useRef } from "react";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showToolTip, setToolTipShow] = useState(false);
  const [toolTipX, setToolTipX] = useState(0);

  const myToolTip = useRef(null);
  const myButton = useRef(null);

  const onMouseEnter = (e) => {
    const x = e.clientX - myButton.current.getBoundingClientRect().left;
    setToolTipShow(true);
    if (myToolTip.current) {
      setToolTipX(x)
    } else {
      setTimeout(function () {
        setToolTipX(x)
      }
        .bind(this),
        500);
    }
  };

  const onMouseLeave = (e) => {
    setToolTipShow(false);
  }

  const onMouseMove = (e) => {
    const x = e.clientX - myButton.current.getBoundingClientRect().left;
    if (myToolTip.current) {
      setToolTipX(x)
    } else {
      setTimeout(function () {
        setToolTipX(x)
      }
        .bind(this),
        500);
    }
  }

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
                            <Button
                              ref={myButton}
                              color="transparent"
                              onMouseEnter={onMouseEnter}
                              onMouseMove={onMouseMove}
                              onMouseLeave={onMouseLeave}
                              className={classes.customButton}
                            >
                              {
                                showToolTip && (
                                  <div
                                    ref={myToolTip}
                                    className={classes.tooltip}
                                    style={{
                                      top: -50,
                                      left: toolTipX
                                    }}
                                  >
                                    <img className={classes.tooltipImage} src={require("assets/img/shalon.jpg")} alt="shalon" />
                                  </div>
                                )
                              }
                              <h2 className={classes.title}>Shalon Teoh —</h2>
                            </Button>
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
                          </div>
                        </GridItem>
                      </GridContainer>
                      <GridContainer className={classes.subContainer}>
                        <GridItem>
                          <img className={classes.image} src={require("assets/img/bg2.png")} alt="bg2" />
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
                <Section3 windowWidth={windowWidth} />
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
