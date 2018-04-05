import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  landing: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2
  }
});

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landing}>
        <Typography variant="display1" gutterBottom>
          Emaily!
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Collect feedback from your users via email campaigns.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
