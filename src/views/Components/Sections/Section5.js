import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section5Style.js";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function Section5() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.paper}>
                    <Grid container spacing={5}>
                        <Grid item container className={classes.center}>
                            <img className={classes.image} src={require("assets/img/contact.png")} />
                        </Grid>
                        <Grid item container className={classNames(classes.center, classes.title)}>
                            React out to me?
                        </Grid>
                        <Grid item container className={classNames(classes.center, classes.title, classes.titleTint)}>
                            shalonteoh@gmail.com
                        </Grid>
                        <Grid item container className={classNames(classes.center)}>
                            <Button
                                color="transparent"
                                href="https://www.linkedin.com/in/shalonteohsinyong"
                                target="_blank"
                                className={classes.socialIcons}
                            >
                                <img className={classes.socialIcons} src={require("assets/img/linkedin.png")} />
                            </Button>
                            <Button
                                color="transparent"
                                href="https://github.com/shalonteoh"
                                target="_blank"
                                className={classes.socialIcons}
                            >
                                <img className={classes.socialIcons} src={require("assets/img/github.png")} />
                            </Button>
                            <Button
                                color="transparent"
                                href="https://stackoverflow.com/users/7862335/shalonteoh"
                                target="_blank"
                                className={classes.socialIcons}
                            >
                                <img className={classes.socialIcons} src={require("assets/img/stack-overflow.png")} />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}