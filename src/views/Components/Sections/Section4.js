import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/section4Style.js";
import { Box, Tab, Tabs } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from "classnames";

const useStyles = makeStyles(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SKILLS = [
    {
        title: "Back-End",
        desc: "PHP Laravel"
    },
    {
        title: "Front-End Web",
        desc: "Javascript ReactJS"
    },
    {
        title: "Front-End Mobile",
        desc: "Javascript React Native"
    },
    {
        title: "Database",
        desc: "MySQL"
    },
    {
        title: "Server Hosting",
        desc: "AWS Beanstalk"
    },
    {
        title: "Version Control",
        desc: "Git"
    },
    {
        title: "VM / Container",
        desc: "Docker"
    }
]

const EXP = [
    {
        title: "Full Stack Developer at EasyWork Asia, Penang",
        desc: "Oct 17 - July 20"
    },
    {
        title: "Business Analyst Internship at Nexstream, Petaling Jaya",
        desc: "Sept 16 - Dec 16"
    }
]

const EDUCATIONS = [
    {
        title: "Bachelor’s Degree for Information System Engineering (Hons)",
        location: "Universiti Tunku Abdul Rahman (UTAR), Kampar",
        desc: "Oct 13 - Sept 17"
    },
    {
        title: "Foundation in Information Technology",
        location: "Universiti Tenaga Nasional (UNITEN), Putrajaya",
        desc: "May 12 - May 13"
    }
]
export default function Section4() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.tabsContainer}>
                    <Tabs
                        centered
                        value={value}
                        onChange={handleChange}
                        classes={{
                            indicator: classes.indicator,
                        }}
                    >
                        <Tab label="Skills" {...a11yProps(0)} classes={{
                            root: classes.tab,
                            selected: classes.selected
                        }} />
                        <Tab label="Experience" {...a11yProps(1)} classes={{
                            root: classes.tab,
                            selected: classes.selected
                        }} />
                        <Tab label="Education" {...a11yProps(2)} classes={{
                            root: classes.tab,
                            selected: classes.selected
                        }} />
                    </Tabs>
                </div>
                <div className={classes.tabsContent}>
                    <TabPanel value={value} index={0}>
                        <div className={classes.list}>
                            {SKILLS.map(({ title, desc }, index) => (
                                <div key={index} className={classes.row}>
                                    <div className={classes.title}>{title}</div>
                                    <div className={classes.subtitle}>{desc}</div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={classes.list}>
                            {EXP.map(({ title, desc }, index) => (
                                <div key={index} className={classes.column}>
                                    <div className={classes.title}>{title}</div>
                                    <div className={classNames(classes.subtitle, classes.marginTop)}>{desc}</div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className={classes.list}>
                            {EDUCATIONS.map(({ title, location, desc }, index) => (
                                <div key={index} className={classes.column}>
                                    <div className={classes.title}>{title}</div>
                                    <div className={classNames(classes.subtitle, classes.marginTop)}>{location}</div>
                                    <div className={classNames(classes.subtitle, classes.marginTop)}>{desc}</div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}