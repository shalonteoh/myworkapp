import { container } from "assets/jss/material-kit-react.js";

const section4Style = {
  sections: {
    padding: "70px 0",
  },
  container: {
    ...container,
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
  tabsContainer: {
    background: "#fff",
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tab: {
    color: "#000",
    '&:hover': {
      color: '#fff',
      opacity: 1,
      backgroundColor: "rgba(0,0,0,0.3)"
    },
    '&$selected': {
      color: '#fff',
      backgroundColor: "rgba(0,0,0,0.3)"
    },
    '&:focus': {
      color: '#fff',
      backgroundColor: "rgba(0,0,0,0.3)"
    },
    "&:first-child": {
      borderTopLeftRadius: "10px"
    },
    "&:last-child": {
      borderTopRightRadius: "10px"
    }
  },
  tabsContent: {
    // maxWidth: 800,
    // textAlign: "center"
  },
  displayNone: {
    display: "none !important"
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
    fontWeight: "600",
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

export default section4Style;
