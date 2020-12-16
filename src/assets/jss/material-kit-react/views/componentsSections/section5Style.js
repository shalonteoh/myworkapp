import { container, titleFont } from "assets/jss/material-kit-react.js";

const section5Style = {
  sections: {
    padding: "30px 0"
  },
  container: {
    ...container,
    height: "80vh"
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
    // padding: "10px 30px",
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
    width: 200,
    height: "auto",
  },
  socialIcons: {
    width: 32,
    height: 32,
  },
  marginTop: {
    marginTop: 30
  }
};

export default section5Style;
