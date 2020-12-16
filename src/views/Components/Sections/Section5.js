import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section5Style.js";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

export default function Section5(props) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.root}>
                    <Grid
                        container
                        alignContent="space-between"
                        style={{ height: "90vh" }}>
                        <Grid item xs={12}>
                            <Grid
                                container
                                justify="center"
                                alignContent="center"
                                style={{
                                    height: "60vh",
                                }}
                            >
                                <div className={classes.brand}>
                                    <Grid item xs={12} className={classes.marginTop}>
                                        <img className={classes.image} src={require("assets/img/shalon.png")} alt="shalon" />
                                    </Grid>
                                    <Grid item xs={12} className={classes.marginTop}>
                                        <div className={classes.title}>React out to me</div>
                                    </Grid>
                                    <Grid item xs={12} className={classes.marginTop}>
                                        <div className={classNames(classes.title, classes.titleTint)}> shalonteoh@gmail.com</div>
                                    </Grid>
                                    <Grid item xs={12} className={classes.marginTop}>
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
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Footer
                                fullpageApi={props.fullpageApi}
                                windowWidth={props.windowWidth}
                                whiteFont />
                        </Grid>

                    </Grid>
                </div>
            </div>
        </div>
    )
}