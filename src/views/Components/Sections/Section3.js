import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section3Style.js";
import classNames from "classnames";
import { Grid, Hidden } from "@material-ui/core";

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
                            height: "100vh"
                        }}
                    >
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.brandCenter}>
                                <div className={classes.title}>Project List</div>
                                <Hidden smDown>
                                    <div
                                        className={classes.subtitle}
                                        style={{ marginTop: 20 }}
                                    >here’s are projects that I’ve worked in the past 3 years as a team or individual</div>
                                </Hidden>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9}>
                            <Grid container spacing={1}
                                style={{
                                    height: "80vh"
                                }}
                            >
                                <Grid item xs={12} sm={6} md={4}>
                                    <div
                                        className={classNames(classes.subContainer, classes.blue)}
                                        style={{
                                            backgroundImage: props.windowWidth > 992 ? `url(${require("assets/img/easywork.png")})` : `url(${require("assets/img/easyworkMobile.png")})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: props.windowWidth > 992 ? "center right 0px" : "bottom 0px right 0px",
                                            backgroundSize: "contain"
                                        }}
                                    >
                                        <div className={classes.brand}>
                                            <div className={classes.subtitle}>Laravel Developer</div>
                                            <div className={classNames(classes.projectTitle, classes.marginTop)}>EasyWork<br />Mobile App</div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <div
                                        className={classNames(classes.subContainer, classes.orange)}
                                        style={{
                                            backgroundImage: props.windowWidth > 992 ? `url(${require("assets/img/easyworkhub.png")})` : `url(${require("assets/img/easyworkHubMobile.png")})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: props.windowWidth > 992 ? "bottom 0px right 0px" : "bottom 0px right -10px",
                                            backgroundSize: props.windowWidth > 992 ? "contain" : "auto 70%"
                                        }}
                                    >
                                        <div className={classes.brand}>
                                            <div className={classes.subtitle}>ReactJS Developer</div>
                                            <div className={classNames(classes.projectTitle, classes.marginTop)}>EasyWork<br />Hub</div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Grid
                                        container
                                        spacing={1}
                                        alignContent="space-between"
                                        className={classes.columnContainer}
                                    >
                                        <Grid item xs={6} sm={6} md={12} style={{
                                            height: props.windowWidth > 992 ? "60%" : "100%"
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
                                                    <div className={classNames(classes.projectTitle, classes.marginTop)}>Exabytes<br />Spin & Win</div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={12}
                                            style={{
                                                height: props.windowWidth > 992 ? "40%" : "100%"
                                            }}
                                        >
                                            <div
                                                className={classNames(classes.columnSubContainer, classes.grey)}
                                                style={{
                                                    backgroundImage: `url(${require("assets/img/tgvMobile.png")})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "bottom 0px right 0px",
                                                    backgroundSize: "auto 70%",
                                                }}
                                            >
                                                <div
                                                    className={classes.brand}
                                                >
                                                    <div className={classes.subtitle}>Business Analyst & QA</div>
                                                    <div className={classNames(classes.projectTitle, classes.marginTop)}>TGV Mobile App</div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div >
        </div >
    );
}