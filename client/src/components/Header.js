import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Payments from "./Payments";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button href="/auth/google">
            Login with google
          </Button>
        );
      default:
        return (
          <div>
            <Typography component="div">
              Credits: {this.props.auth.credits}
            </Typography>
            <Payments />
            <Button href="/api/logout">
              Logout
            </Button>
          </div>
        );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <Button component={Link} to={this.props.auth ? "/surveys" : "/"}> */}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Emaily
            </Typography>
            {/* </Button> */}
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
