import { container } from "assets/jss/material-kit-react.js";

const section2Style = {
  sections: {
    padding: "70px 0",
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
  brand: {
    color: "#282C33",
    textAlign: "left",
  },
  title: {
    fontSize: "42px",
    fontWeight: "500",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    fontSize: "30px",
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
    height: "auto"
  },
};

export default section2Style;
