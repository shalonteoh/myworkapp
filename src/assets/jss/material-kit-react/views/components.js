import { container, standardFont, subtitleFont } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container: {
    ...container,
  },
  root: {
    flexGrow: 1
  },
  subContainer: {
    flex: 1,
  },
  socialIconsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    color: "#fff",
    textAlign: "center",
    fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  },
  title: {
    ...standardFont,
    fontWeight: "500"
  },
  subtitle: {
    ...subtitleFont,
    fontWeight: "400",
  },
  main: {
    background: "#000",
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
    width: 100,
    height: 100,
  },
  socialIcons: {
    width: 28,
    height: 28,
    "@media (min-width: 992px)": {
      width: 32,
      height: 32,
    },
  },
  tooltipImage: {
    width: 100,
    height: "auto"
  },
  marginTop: {
    marginTop: 10
  }
};

export default componentsStyle;
