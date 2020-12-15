import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  mainContainer: {
    background: "#FFF"
  },
  container: {
    ...container,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
  },
  socialIconsContainer: {
    marginTop: 30,
  },
  customButton: {
    display: "relative",
    padding: 0,
    margin: 0,
    textTransform: "none",
  },
  tooltip: {
    position: "absolute",
    zIndex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  brand: {
    color: "#282C33",
    textAlign: "left",
  },
  title: {
    fontSize: "50px",
    fontWeight: "500",
    color: "#4A90E2"
  },
  subtitle: {
    fontSize: "50px",
    fontWeight: "500",
    maxWidth: "500px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    // zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  image: {
    width: 500,
    height: "auto"
  },
  socialIcons: {
    width: 32,
    height: 32,
  },
  tooltipImage: {
    width: 100,
    height: "auto"
  }
};

export default componentsStyle;
