/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {props.windowWidth > 800 && (
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <Button
                  color="transparent"
                  className={classes.block}
                  onClick={() => props.fullpageApi.moveTo(1)}
                >
                  Go to top{" "}<i className="fas fa-arrow-up"></i>
                </Button>
              </ListItem>
            </List>
          </div>
        )}
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with ReactJS{" "}
          <i className="fab fa-react"></i>{" "}by Shalon Teoh
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
