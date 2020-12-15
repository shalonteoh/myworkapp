import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section3Style.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Section3(props) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div
                    className={classNames(classes.subContainer, classes.blue)}
                    style={{
                        flex: props.windowWidth > 800 ? 4 : 1,
                        backgroundImage: `url(${require("assets/img/easywork.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom 0px right 0px",
                        backgroundSize: props.windowWidth > 800 ? "auto 100%" : "auto 80%"
                    }}
                >
                    <div className={classes.brand}>
                        <div className={classes.subtitle}>Laravel Developer</div>
                        <div className={classNames(classes.title, classes.marginTop)}>EasyWork<br />Mobile App</div>
                    </div>
                </div>
                <div
                    className={classNames(classes.subContainer, classes.red)}
                    style={{
                        flex: props.windowWidth > 800 ? 3 : 1,
                        backgroundImage: `url(${require("assets/img/exabytes.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom 0px right 0px",
                        backgroundSize: "cover"
                    }}
                >
                    <div className={classes.brand}>
                        <div className={classes.subtitle}>Bootstrap Developer</div>
                        <div className={classNames(classes.title, classes.marginTop)}>Exabytes App<br />Spin & Win</div>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div
                    className={classNames(classes.subContainer, classes.grey)}
                    style={{
                        flex: props.windowWidth > 800 ? 6 : 1,
                        backgroundImage: props.windowWidth > 800 ? `url(${require("assets/img/easyworkhub.png")})` : `url(${require("assets/img/easyworkHubVertical.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: props.windowWidth > 800 ? "bottom 0px right 0px" : "bottom -50px right 0px",
                        backgroundSize: "auto 80%"
                    }}
                >
                    <div className={classes.brand}>
                        <div className={classes.subtitle}>ReactJS Developer</div>
                        <div className={classNames(classes.title, classes.marginTop)}>EasyWork<br />Hub</div>
                    </div>
                </div>
                <div
                    className={classNames(classes.subContainer, classes.indigo)}
                    style={{
                        flex: props.windowWidth > 800 ? 2 : 1
                    }}
                >
                    <Link to="profile-page">
                        <div className={classes.content}>
                            <div className={classes.brand}>
                                <div className={classes.subtitle}>+5 more projects</div>
                                <div className={classNames(classes.title, classes.marginTop)}>See All<br />Projects</div>
                            </div>
                            <div className={classes.icons}>
                                <i className="far fa-arrow-alt-circle-right"></i>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}