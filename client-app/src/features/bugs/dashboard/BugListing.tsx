import React from "react";
import { Card, Icon, Grid, Label } from "semantic-ui-react";
import IBug from "../../../app/models/bug";

const BugListing: React.FC<{ bug: IBug }> = ({ bug }) => {
  let newDate = new Date();
  let currentTime = Date.parse(newDate.toJSON().split("Z")[0]);
  const timeDiff = currentTime - Date.parse(bug.createdOn);
  const timeElapsed = Math.round(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeElapsed / 24);
  const hours = Math.floor(timeElapsed % 24);

  // description max length
  // let descriptionText: string;
  // if (bug.description.length >= 280) {
  //   descriptionText = bug.description.substring(0, 280) + "...";
  // } else {
  //   descriptionText = bug.description;
  // }

  return (
    <Card color="olive" raised fluid style={{ backgroundColor: "#f9f8f0" }}>
      <Card.Content
        header={bug.title}
        style={{
          height: "60px",
          whiteSpace: "pre-line",
          overflow: "hidden",
        }}
      />
      <Card.Content extra>
        <Grid>
          <Grid.Column width={7} style={{ fontSize: "10px", color: "black" }}>
            <Icon
              style={{
                fontSize: "18px",
                verticalAlign: "middle",
                marginRight: "0px",
              }}
              name="clock"
              color="blue"
            />{" "}
            {days}D | {hours}H
          </Grid.Column>
          <Grid.Column width={2}>
            <Icon
              name="flag"
              color={
                bug.priority === "High"
                  ? "red"
                  : bug.priority === "Medium"
                  ? "yellow"
                  : "green"
              }
            />
          </Grid.Column>
          <Label
            style={{
              height: "2.4em",
              position: "absolute",
              marginTop: "0.7em",
              marginLeft: "-1.1em",
            }}
            color="teal"
            ribbon="right"
          >
            {bug.category}
          </Label>
        </Grid>
      </Card.Content>
      <p
        style={{
          height: "10.7rem",
          whiteSpace: "pre-line",
          overflow: "hidden",
          padding: "1rem 2rem",
          color: "#555",
        }}
      >
        {bug.description}
      </p>
      <Card.Content extra>
        <Grid columns={3}>
          <Grid.Column>
            <Icon name="user" color="red" style={{ padding: "0px" }} />{" "}
            {bug.admin}
          </Grid.Column>
          <Grid.Column>
            <Icon name="user" color="green" /> {bug.developer}
          </Grid.Column>
          <Grid.Column>
            <Label
              style={{ width: "4rem" }}
              color={bug.status.toLowerCase() === "open" ? "blue" : "red"}
              key="orange"
            >
              {bug.status}
            </Label>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};

export default BugListing;
