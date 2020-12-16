import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section3Style.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";

const useStyles = makeStyles(styles);

export default function Section3(props) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={1}
                        style={{
                            height: props.windowWidth > 800 ? "70vh" : "90vh"
                        }}>
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.brandCenter}>
                                <div className={classes.title}>Project List</div>
                                {props.windowWidth > 800 && (
                                    <div className={classNames(classes.subtitle, classes.marginTop)}>here’s are projects that I’ve worked in the past 3 years as a team or individual</div>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div
                                className={classNames(classes.subContainer, classes.blue)}
                                style={{
                                    backgroundImage: props.windowWidth > 800 ? `url(${require("assets/img/easywork.png")})` : `url(${require("assets/img/easyworkMobile.png")})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: props.windowWidth > 800 ? "center right 0px" : "bottom 0px right 0px",
                                    backgroundSize: "contain"
                                }}
                            >
                                <div className={classes.brand}>
                                    <div className={classes.subtitle}>Laravel Developer</div>
                                    <div className={classNames(classes.projectTitle, classes.marginTop)}>EasyWork<br />Mobile App</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div
                                className={classNames(classes.subContainer, classes.grey)}
                                style={{
                                    backgroundImage: props.windowWidth > 800 ? `url(${require("assets/img/easyworkhub.png")})` : `url(${require("assets/img/easyworkHubMobile.png")})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: props.windowWidth > 800 ? "bottom 0px right 0px" : "bottom -20px right 0px",
                                    backgroundSize: props.windowWidth > 800 ? "contain" : "auto 80%"
                                }}
                            >
                                <div className={classes.brand}>
                                    <div className={classes.subtitle}>ReactJS Developer</div>
                                    <div className={classNames(classes.projectTitle, classes.marginTop)}>EasyWork<br />Hub</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Grid
                                container
                                spacing={1}
                                alignContent="space-between"
                                className={classes.columnContainer}
                            >
                                <Grid item xs={6} sm={6} md={12} style={{
                                    height: props.windowWidth > 800 ? "60%" : "100%"
                                }}>
                                    <div
                                        className={classNames(classes.columnSubContainer, classes.red)}
                                        style={{
                                            backgroundImage: `url(${require("assets/img/exabytes.png")})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "bottom 0px right 0px",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <div className={classes.brand}>
                                            <div className={classes.subtitle}>Bootstrap Developer</div>
                                            <div className={classNames(classes.projectTitle, classes.marginTop)}>Exabytes App<br />Spin & Win</div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={12}
                                    style={{
                                        height: props.windowWidth > 800 ? "40%" : "100%"
                                    }}
                                >
                                    <div
                                        className={classNames(classes.columnSubContainer, classes.white)}
                                        style={{
                                            backgroundImage: `url(${require("assets/img/tgvMobile.png")})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "bottom 0px right 0px",
                                            backgroundSize: "auto 70%",
                                        }}
                                    >
                                        <div
                                            className={classes.brand}
                                            style={{ color: "#000" }}
                                        >
                                            <div className={classes.subtitle}>Business Analyst & QA</div>
                                            <div className={classNames(classes.projectTitle, classes.marginTop)}>TGV<br />Mobile<br />App</div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div >
    );
}