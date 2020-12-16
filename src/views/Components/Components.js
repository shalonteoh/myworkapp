import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
import Section4a from "./Sections/Section4a.js";
import Section5 from "./Sections/Section5.js";
import ReactFullpage from '@fullpage/react-fullpage';
import classNames from "classnames";
import { Grid, Hidden } from "@material-ui/core";

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
        scrollingSpeed={500}
        responsiveWidth={992}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div>
                  <Hidden only="sm">
                    <Header
                      brand={(
                        <div className={classes.subtitle}><i class="far fa-envelope"></i>{" "}shalonteoh@gmail.com</div>
                      )}
                      rightLinks={<HeaderLinks fullpageApi={fullpageApi} />}
                      absolute
                      color="transparent"
                      {...rest}
                    />
                  </Hidden>
                  <div className={classes.container}>
                    <div className={classes.root}>
                      <Grid container justifyContent="center" spacing={1}>
                        <Grid item xs={12} md={12}>
                          <div className={classes.brand}>
                            <img className={classes.image} src={require("assets/img/bg2.png")} alt="bg2" />
                            <div className={classNames(classes.subtitle, classes.marginTop)}>Hi, I’m Shalon <span role="img" aria-label="rock">🤘</span></div>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Grid container justifyContent="center">
                            <Grid item xs={1} md={3} />
                            <Grid item xs={10} md={6}>
                              <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                  <div className={classes.brand}>
                                    <div className={classes.title}>Build apps for mobile and web</div>
                                    <div className={classNames(classes.subtitle, classes.marginTop)}>a <b>Full Stack Developer</b> in Penang, Malaysia.
I specialized in mobile back-end and responsive website development</div>
                                  </div>
                                </Grid>
                                <Grid item xs={12}>
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
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={1} md={3} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
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
                <Section5 fullpageApi={fullpageApi} windowWidth={windowWidth} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
