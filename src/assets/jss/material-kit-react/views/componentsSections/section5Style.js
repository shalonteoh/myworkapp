import { container, titleFont, subtitleFont } from "assets/jss/material-kit-react.js";

const section5Style = {
  sections: {
    paddingTop: "30px",
  },
  container: {
    ...container,
  },
  root: {
    flexGrow: 1
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  brand: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    ...titleFont,
    fontWeight: "400",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    ...subtitleFont,
    //fontSize: "24px",
    fontWeight: "400",
    //maxWidth: "500px",
  },
  image: {
    width: 100,
    height: "auto",
    "@media (min-width: 992px)": {
      width: 200,
    }
  },
  socialIcons: {
    width: 32,
    height: 32,
  },
  marginTop: {
    marginTop: 10,
    "@media (min-width: 992px)": {
      marginTop: 30,
    }
  },
  bottom: {
    display: "absolute",
    bottom: 0,
    left: 0
  }
};

export default section5Style;
