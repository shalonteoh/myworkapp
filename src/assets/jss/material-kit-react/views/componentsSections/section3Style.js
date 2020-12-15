import { container, titleFont, subtitleFont } from "assets/jss/material-kit-react.js";

const section3Style = {
  sections: {
    padding: "50px 0",
  },
  container: {
    ...container,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    margin: 10,
    height: "40vh",
    overflow: "hidden",
    borderRadius: 20
  },
  brand: {
    color: "#fff",
    textAlign: "left",
    padding: "20px 30px",
  },
  title: {
    ...titleFont,
    fontWeight: "500",
  },
  subtitle: {
    ...subtitleFont,
    fontWeight: "300",
  },
  icons: {
    ...titleFont,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "#fff",
    padding: "20px 30px",
  },
  image: {
    width: "50%",
    height: "auto"
  },
  blue: {
    background: "#4A90E2",
  },
  red: {
    background: "#450200"
  },
  indigo: {
    background: "#0C0539"
  },
  grey: {
    background: "#4A4A4A"
  },
  marginTop: {
    marginTop: 10
  }
};

export default section3Style;
