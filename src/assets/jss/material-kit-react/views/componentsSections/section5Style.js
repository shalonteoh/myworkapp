import { container } from "assets/jss/material-kit-react.js";

const section5Style = {
  sections: {
    padding: "70px 0",
  },
  container: {
    ...container,
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
    fontSize: 30,
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
    width: 200,
    height: "auto"
  },
  socialIcons: {
    width: 32,
    height: 32,
  },
};

export default section5Style;
