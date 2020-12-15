import { container, titleFont, subtitleFont } from "assets/jss/material-kit-react.js";

const section2Style = {
  sections: {
    padding: "70px 20px",
    height: "80vh"
  },
  container: {
    ...container,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 800px)": {
      flexDirection: "column",
    },
  },
  subContainer: {
    flex: 1,
  },
  brand: {
    color: "#282C33",
    textAlign: "left",
    "@media (max-width: 800px)": {
      textAlign: "justify",
    },
  },
  title: {
    ...titleFont,
    lineHeight: "1em",
    fontWeight: "500",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    ...subtitleFont,
    lineHeight: "1.5em",
    fontWeight: "300",
    maxWidth: "500px",
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  image: {
    width: 500,
    height: "auto",
    "@media (max-width: 800px)": {
      width: 250,
    },
  },
  marginTop: {
    marginTop: 10
  }
};

export default section2Style;
