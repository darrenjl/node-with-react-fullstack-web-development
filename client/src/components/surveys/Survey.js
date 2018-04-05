import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    marginBottom: 12
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Survey extends Component {
  render() {
    const survey = this.props.survey;
    console.log(survey);
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {survey.title}
            </Typography>
            <Typography className={classes.pos} component="p">
              {survey.body}
            </Typography>
            <Typography color="textSecondary" className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Yes: {survey.yes}</Button>
            <Button size="small">No: {survey.no}</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Survey);
