// ##############################
// // // Dashboard styles
// #############################

import ds from "mdvariables/styles/dashboardStyle";

const dashboardStyle = theme => ({
  ...ds,
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
    color: theme.palette.common.white,
    background: "linear-gradient(60deg, #26c6da, #00acc1)"
  }
});

export default dashboardStyle;
