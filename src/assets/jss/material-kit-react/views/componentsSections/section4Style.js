import { container, standardFont, subtitleFont } from "assets/jss/material-kit-react.js";

const section4Style = {
  sections: {
    // padding: "30px 0",
  },
  container: {
    ...container,
    height: "90vh"
  },
  root: {
    flexGrow: 1
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    maxWidth: 600,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  column: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    padding: 20,
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  subContainer: {
    overflow: "hidden",
    borderRadius: 10,
    background: "#fff",
    margin: 10,
    boxShadow: "1px 1px 20px rgba(0,0,0,0.3) inset"
  },
  absolute: {
    position: 'absolute',
  },
  brand: {
    color: "#fff",
    textAlign: "left",
    padding: "20px",
    "@media (max-width: 800px)": {
      padding: "10px 15px",
    },
  },
  title: {
    ...standardFont,
    fontWeight: "500",
  },
  titleTint: {
    color: "#4A90E2"
  },
  subtitle: {
    ...subtitleFont,
    fontWeight: "500",
    "@media (max-width: 800px)": {
      fontSize: 16,
    },
  },
  projectTitle: {
    lineHeight: "1cm",
    fontSize: 30,
    fontWeight: "700",
    "@media (max-width: 800px)": {
      fontSize: 20,
      lineHeight: "0.5cm"
    },
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
  },
  marginTop: {
    marginTop: 10
  }
};

export default section4Style;
