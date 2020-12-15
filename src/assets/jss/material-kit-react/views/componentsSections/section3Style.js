import { container } from "assets/jss/material-kit-react.js";

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
  absolute: {
    position: 'absolute',
  },
  brand: {
    color: "#fff",
    textAlign: "left",
    padding: "10px 30px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "500",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    fontSize: "24px",
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
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "#fff",
    fontSize: 50,
    marginRight: 30,
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
  }
};

export default section3Style;
