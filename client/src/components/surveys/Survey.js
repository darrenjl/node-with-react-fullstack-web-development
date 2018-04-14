import React, { Component } from "react";
import Button from "material-ui/Button";
import { RegularCard, ItemGrid } from "mdcomponents";

class Survey extends Component {
  render() {
    const survey = this.props.survey;
    return (
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle={survey.title}
          cardSubtitle={
            "Sent on: " + new Date(survey.dateSent).toLocaleDateString()
          }
          headerColor="blue"
          content={survey.body}
          footer={
            <div>
              <Button size="small">Yes: {survey.yes}</Button>
              <Button size="small">No: {survey.no}</Button>
            </div>
          }
        />
      </ItemGrid>
    );
  }
}

export default Survey;
