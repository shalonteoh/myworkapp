import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section3Style.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Section3() {
    const classes = useStyles();
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
        <div className={classes.sections}>
            <div className={classes.container}>
                <div
                    className={classNames(classes.subContainer, classes.blue)}
                    style={{
                        flex: windowWidth > 800 ? 4 : 1,
                        backgroundImage: `url(${require("assets/img/easywork.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom 0px right 0px",
                        backgroundSize: windowWidth > 800 ? "auto 100%" : "0%"
                    }}
                >
                    <div className={classes.brand}>
                        <h2 className={classes.subtitle}>Laravel Developer</h2>
                        <h2 className={classes.title}>EasyWork<br />Mobile App</h2>
                    </div>
                </div>
                <div
                    className={classNames(classes.subContainer, classes.red)}
                    style={{
                        flex: windowWidth > 800 ? 3 : 1,
                        backgroundImage: `url(${require("assets/img/exabytes.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom 0px right 0px",
                        backgroundSize: windowWidth > 800 ? "cover" : "0%"
                    }}
                >
                    <div className={classes.brand}>
                        <h2 className={classes.subtitle}>Bootstrap Developer</h2>
                        <h2 className={classes.title}>Exabytes App<br />Spin & Win</h2>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div
                    className={classNames(classes.subContainer, classes.grey)}
                    style={{
                        flex: windowWidth > 800 ? 6 : 1,
                        backgroundImage: `url(${require("assets/img/easyworkhub.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom -10px right 0px",
                        backgroundSize: windowWidth > 800 ? "auto 80%" : "0%"
                    }}
                >
                    <div className={classes.brand}>
                        <h2 className={classes.subtitle}>ReactJS Developer</h2>
                        <h2 className={classes.title}>EasyWork<br />Hub</h2>
                    </div>
                </div>
                <div
                    className={classNames(classes.subContainer, classes.indigo)}
                    style={{
                        flex: windowWidth > 800 ? 2 : 1
                    }}
                >
                    <Link to="profile-page">
                        <div className={classes.content}>
                            <div className={classes.brand}>
                                <h2 className={classes.subtitle}>+5 more projects</h2>
                                <h2 className={classes.title}>See All<br />Projects</h2>
                            </div>
                            <div className={classes.icons}>
                                <i class="far fa-arrow-alt-circle-right" style={{ transform: "rotate(-45deg)" }}></i>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}