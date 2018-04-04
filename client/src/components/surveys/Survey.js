import React from "react";

export default ({ survey }) => {
  console.log(survey);
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{survey.title}</span>
        <p>{survey.body}</p>
        <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
        <p>Last response: {survey.lastResponded ? new Date(survey.lastResponded).toLocaleDateString() : ''}</p>
      </div>
      <div class="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
    </div>
  );
};
