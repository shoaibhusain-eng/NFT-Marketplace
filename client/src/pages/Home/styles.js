import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homepage: {},
  images: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  banner: {
    // minHeight: "50vh",
    // maxHeight: "50vh",
    // marginBottom: "3rem"
  },
  gridBanner: {
    // margin: 0,
    // width: '100%',
  },
  main: {
    //backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    backgroundImage: "transparent",
    "& img": {
      width: "55%",
    },
    "& p": {
      margin: "3rem 8rem 4rem 8.5rem",
      fontSize: "1.2rem",
      textAlign: "center",
    },
    "& button": {
      textTransform: "none",
      fontSize: "1.2rem",
      fontWeight: "400",
      background: "#3F51B5",
    },
  },
  allNfts: {
    marginTop: "2rem",
    padding: "0 2rem",
    //backgroundColor: "#8f99cf",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "1rem",
    textAlign:'center',
    color:'black',
    border:"2px solid black"
  },
});

export { useStyles };