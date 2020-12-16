import { container, titleFont, subtitleFont, standardFont } from "assets/jss/material-kit-react.js";

const section3Style = {
  sections: {
    padding: "0px 30px",
    "@media (min-width: 992px)": {
      padding: "70px 0px"
    },
  },
  container: {
    ...container,
  },
  root: {
    flexGrow: 1,
  },
  gridColumn: {
    display: "flex",
    flexDirection: "column"
  },
  subContainer: {
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
    "@media (min-width: 992px)": {
      borderRadius: 20
    },
  },
  columnContainer: {
    overflow: "hidden",
    height: "100%",
  },
  columnSubContainer: {
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
    "@media (min-width: 992px)": {
      borderRadius: 20
    },
  },
  brand: {
    color: "#fff",
    textAlign: "left",
    padding: "20px 30px",
    "@media (max-width: 800px)": {
      padding: "15px",
    },
  },
  brandCenter: {
    color: "#fff",
    textAlign: "center",
    padding: "20px 30px 0px 30px",
  },
  title: {
    ...standardFont,
    fontWeight: "500",
  },
  subtitle: {
    ...subtitleFont,
    fontWeight: "400",
  },
  projectTitle: {
    fontSize: 30,
    lineHeight: "1cm",
    fontWeight: "500",
    "@media (max-width: 800px)": {
      fontSize: 24,
    },
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
    background: "#006D99",
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
  orange: {
    background: "#D85B1E"
  },
  marginTop: {
    marginTop: 5
  },
  white: {
    background: "#fff",
  }
};

export default section3Style;
