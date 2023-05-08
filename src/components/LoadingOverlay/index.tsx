import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});

const LoadingOverlay = () => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <CircularProgress color="primary" size={68} />
    </div>
  );
};

export default LoadingOverlay;
