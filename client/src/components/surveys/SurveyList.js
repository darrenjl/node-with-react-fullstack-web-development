import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { fetchSurveys } from "../../actions";
import Survey from "./Survey";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    color: theme.palette.common.white
  }
});

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      console.log(survey);
      return <Survey key={survey._id} survey={survey} />;
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={8}>
            <Typography variant="title" color="inherit">
              Surveys
            </Typography>
          </Grid>
          <Grid item xs={8}>
            {this.renderSurveys()}
          </Grid>
        </Grid>
        <Button
          variant="fab"
          className={classes.fab}
          component={Link}
          to="/surveys/new"
          color="primary"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}
function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(
  withStyles(styles)(SurveyList)
);
