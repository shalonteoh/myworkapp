import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section4Style.js";
import { Grid, Hidden } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const DEV = [
    {
        title: "Back-End",
        desc: "PHP Laravel",
        duration: "2+ years"
    },
    {
        title: "Front-End Web",
        desc: "Javascript ReactJS",
        duration: "1+ year"
    },
    {
        title: "Database",
        desc: "MySQL",
        duration: "2+ years"
    },
]

const CICD = [
    {
        title: "Server Hosting",
        desc: "AWS Beanstalk",
        duration: "2 years"
    },
    {
        title: "Version Control",
        desc: "Git",
        duration: "3 years"
    },
    {
        title: "VM/Container",
        desc: "Docker",
        duration: "2 years"
    }
]

const OTHER = [
    "VS Code", "MailChimp", "Mandrill", "Bitbucket", "Postman", "Jira", "DeployBot", "Google API"
]

export default function Section4() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.brand}>
                    <div className={classes.title}>Skills & Tools</div>
                </div>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={4} md={4}>
                            <div className={classes.brand}>
                                <div className={classes.projectTitle}>Development</div>
                            </div>
                            {DEV.map(({ title, desc, duration }, index) => (
                                <div
                                    key={index}
                                    className={classNames(classes.brand, classes.subContainer)}
                                    style={{ color: "#000" }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}>{title}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.projectTitle}>{desc}</div>
                                        </Grid>
                                        <Hidden only="sm">
                                            <Grid item xs={12}>
                                                <div className={classes.subtitle}>{duration}</div>
                                            </Grid>
                                        </Hidden>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <div className={classes.brand}>
                                <div className={classes.projectTitle}>CI/CD</div>
                            </div>
                            {CICD.map(({ title, desc, duration }, index) => (
                                <div
                                    key={index}
                                    className={classNames(classes.brand, classes.subContainer)}
                                    style={{ color: "#000" }}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className={classes.subtitle}>{title}</div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className={classes.projectTitle}>{desc}</div>
                                        </Grid>
                                        <Hidden only="sm">
                                            <Grid item xs={12}>
                                                <div className={classes.subtitle}>{duration}</div>
                                            </Grid>
                                        </Hidden>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div className={classes.brand}>
                                <div className={classes.projectTitle}>Others</div>
                            </div>
                            <div
                                className={classNames(classes.brand)}>
                                <Grid
                                    container
                                    spacing={0}>
                                    {OTHER.map((item, index) => (
                                        <Grid item key={index} item xs={4} sm={12} md={12}>
                                            <div className={classes.subtitle}>{item}</div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}