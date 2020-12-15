import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section2Style.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Section2() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.subContainer}>
                    <div>
                        <img className={classes.image} src={require("assets/img/bg3.png")} alt="bg3" />
                    </div>
                </div>
                <div className={classes.subContainer}>
                    <div>
                        <div className={classes.brand}>
                            <div className={classes.title}><span className={classes.titleTint}>Experienced</span> in creating backend applications</div>
                            <div className={classNames(classes.subtitle, classes.marginTop)}>I am a graduate from Universiti Tunku Abdul Rahman (UTAR) with a Bachelor’s degree in Information System Engineering <span role="img" aria-label="girl-laptop">👩🏻‍💻</span> I enjoy creating APIs and writing backend logic that serves mobile apps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}