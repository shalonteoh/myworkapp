import { container, columnCenter } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container: {
    ...container,
    display: "flex",
    justifyContent: "center",
  },
  content: {
    ...columnCenter,
    width: "80vh",
    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
  subContainer: {
    flex: 1,
  },
  socialIconsContainer: {
    marginTop: 30,
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
    lineHeight: "1.5cm",
    fontSize: 42,
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: "1cm",
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
    width: 32,
    height: 32,
  },
  tooltipImage: {
    width: 100,
    height: "auto"
  },
  marginTop: {
    marginTop: 20
  }
};

export default componentsStyle;
