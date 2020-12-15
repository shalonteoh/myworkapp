import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section2Style.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function Section2() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <GridContainer className={classes.subContainer}>
                    <GridItem>
                        <img className={classes.image} src={require("assets/img/bg3.png")} alt="bg3" />
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.subContainer}>
                    <GridItem>
                        <div className={classes.brand}>
                            <h2 className={classes.title}><span className={classes.titleTint}>Experienced</span> in creating backend applications</h2>
                            <h2 className={classes.subtitle}>I am a graduate from Universiti Tunku Abdul Rahman (UTAR) with a Bachelor’s degree in Information System Engineering <span role="img" aria-label="girl-laptop">👩🏻‍💻</span> I enjoy creating APIs and writing backend logic that serves mobile apps</h2>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}