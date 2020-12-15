import { container, titleFont } from "assets/jss/material-kit-react.js";

const section5Style = {
  sections: {
    padding: "70px 0",
  },
  container: {
    ...container,
  },
  round: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    "@media (max-width: 800px)": {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
  },
  paper: {
    padding: 20,
    margin: 'auto',
    maxWidth: 500,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  brand: {
    color: "#fff",
    textAlign: "left",
    padding: "10px 30px",
  },
  title: {
    ...titleFont,
    fontWeight: "400",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "400",
    maxWidth: "500px",
  },
  image: {
    width: 250,
    height: "auto",
    "@media (max-width: 800px)": {
      width: 150,
    },
  },
  socialIcons: {
    width: 32,
    height: 32,
  },
};

export default section5Style;
