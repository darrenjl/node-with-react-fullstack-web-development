import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import withRoot from "../withRoot";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import SurveyList from './surveys/SurveyList';
import SurveyNew from "./surveys/SurveyNew";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Header />

          <Grid container spacing={24} justify="center">
            <Grid item xs={8}>
              {/* BrowserRouter expects exactly one child  */}
              <div>
                {/* exact translates to exact={true} */}

                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={SurveyList} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(withRoot(withStyles(styles)(App)));
