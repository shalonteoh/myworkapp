import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section4aStyle.js";
import { Grid } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const EXP = [
    {
        title: "Full Stack Developer",
        location: "EasyWork Asia Sdn Bhd",
        desc: "October 17 - July 20"
    },
    {
        title: "Business Analyst & Quality Assurance Internship",
        location: "Nexstream Sdn Bhd",
        desc: "September 16 - December 16"
    }
]

const EDU = [
    {
        title: "Bachelor’s Degree for Information System Engineering",
        location: "Universiti Tunku Abdul Rahman",
        desc: "2013 - 2017"
    },
    {
        title: "Foundation in Information Technology",
        location: "Universiti Tenaga Nasional",
        desc: "2012 - 2013"
    }
]
export default function Section4a() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.brand}>
                    <div className={classes.title}>Background</div>
                </div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className={classNames(classes.brand, classes.marginTop)}>
                                <div className={classes.projectTitle}>Working Experience</div>
                            </div>
                            {EXP.map(({ title, desc, location }, index) => (
                                <div
                                    key={index}
                                    className={classNames(classes.brand)}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}
                                                style={{ fontWeight: 800 }}>{location}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}>{title}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.durationText}>{desc}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={classNames(classes.brand, classes.marginTop)}>
                                <div className={classes.projectTitle}>Education</div>
                            </div>
                            {EDU.map(({ title, desc, location }, index) => (
                                <div
                                    key={index}
                                    className={classNames(classes.brand)}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}
                                                style={{ fontWeight: 800 }}>{location}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}>{title}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.durationText}>{desc}</div>
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}