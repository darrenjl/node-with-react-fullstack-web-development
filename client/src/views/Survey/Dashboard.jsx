import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";
import * as actions from "../../actions";

import { Survey } from "components";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      console.log(survey);
      return <Survey key={survey._id} survey={survey} />;
    });
  }

  render() {
    return (
      <div>
        <Grid container>{this.renderSurveys()}</Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, actions)(
  withStyles(dashboardStyle)(Dashboard)
);
