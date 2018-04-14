import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Grid } from "material-ui";
import SurveyField from "components/Surveys/SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "components/Surveys/formFields";
import { RegularCard, Button, ItemGrid } from "mdcomponents";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <ItemGrid xs={12} sm={12} md={12} key={name}>
          <Field
            key={name}
            component={SurveyField}
            type="text"
            label={label}
            name={name}
          />
        </ItemGrid>
      );
    });
  }
  render() {
    return (
      <Grid container>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="blue"
              cardTitle="Create a new survey"
              cardSubtitle="Fill out the form below to create a new survey"
              content={
                <div>
                  <Grid container>{this.renderFields()}</Grid>
                </div>
              }
              footer={
                <div>
                  <Button
                    color="white"
                    component={Link}
                    to="/surveys"
                  >
                    Cancel
                  </Button>
                  <Button color="success" type="submit">
                    Next
                  </Button>
                </div>
              }
            />
          </ItemGrid>
        </form>
      </Grid>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ label, name }) => {
    if (!values[name]) {
      errors[name] = label + " field is required.";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
