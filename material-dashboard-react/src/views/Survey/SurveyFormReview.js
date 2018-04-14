import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Email } from "material-ui-icons";
import { Grid } from "material-ui";
import formFields from "components/Surveys/formFields";
import * as actions from "../../actions";
import { RegularCard, Button, ItemGrid } from "mdcomponents";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <ItemGrid xs={12} sm={12} md={12} key={name}>
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      </ItemGrid>
    );
  });
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          headerColor="blue"
          cardTitle="Create a new survey"
          cardSubtitle="Fill out the form below to create a new survey"
          content={
            <div>
              <Grid container>{reviewFields}</Grid>
            </div>
          }
          footer={
            <div>
              <Button color="warning" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                color="success"
                onClick={() => submitSurvey(formValues, history)}
              >
                Send survey
                <Email />
              </Button>
            </div>
          }
        />
      </ItemGrid>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
