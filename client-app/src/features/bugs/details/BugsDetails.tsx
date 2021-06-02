import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps, Link } from "react-router-dom";
import BugStore from "../../../app/stores/bugStore";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {
  Segment,
  Header,
  Grid,
  Icon,
  Label,
  Button,
  Container,
} from "semantic-ui-react";

// set params to the id of the bug
interface DetailParams {
  id: string;
}

//
const BugsDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  // import store
  const bugStore = useContext(BugStore);
  const { loading, loadBug, bug, deleteBug } = bugStore;

  // load the bug using the params
  useEffect(() => {
    loadBug(match.params.id);
  }, [loadBug, match.params.id]);

  // handling a delete action
  const handleDeleteBug = () => {
    deleteBug(match.params.id).then(() => history.push("/bugs"));
  };

  // handle closing a ticket
  // const handleCloseTicket = () => {
  //   console.log(bugStore.bug);
  // };

  // load icon while loading
  if (loading || !bug) {
    return <LoadingComponent content="loading content..." />;
  }

  // time seperation
  const date = bug.createdOn.split("T")[0];
  const time = bug.createdOn.split("T")[1].slice(0, 8);

  return (
    <Segment raised>
      <Grid style={{ marginBottom: "1em" }} stackable>
        <Grid.Column width={8} floated="left">
          <Label
            style={{
              // marginTop: "2em",
              // marginLeft: "2em",
              color: "white",
              backgroundColor: "#bd4509",
            }}
          >
            Ticket Opened On {date} at {time}
          </Label>
        </Grid.Column>
        <Grid.Column
          width={8}
          floated="right"
          verticalAlign="bottom"
          style={{ textAlign: "right" }}
        >
          <Icon name="user" color="red" /> {bug.admin}
          <Icon style={{ marginLeft: "2em" }} name="user" color="green" />{" "}
          {bug.developer}
        </Grid.Column>
      </Grid>
      <Segment>
        <Grid columns={3} divided stackable>
          <Grid.Row
            style={{
              // height: "3.8em",
              textAlign: "center",
            }}
          >
            <Grid.Column style={headersStyle}>
              <Label color="blue">{bug.category}</Label>
            </Grid.Column>
            <Grid.Column style={headersStyle}>
              <Label
                color={bug.status.toUpperCase() === "OPEN" ? "green" : "red"}
              >
                {bug.status}
              </Label>
            </Grid.Column>
            <Grid.Column style={headersStyle}>
              <Icon
                name="flag"
                size="big"
                color={
                  bug.priority.toUpperCase() === "HIGH"
                    ? "red"
                    : bug.priority.toUpperCase() === "MEDIUM"
                    ? "yellow"
                    : "green"
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header>Title</Header>
      <p style={{ marginLeft: "20px" }}>{bug.title}</p>

      <Header>Description</Header>
      <p style={{ marginLeft: "20px", whiteSpace: "pre-line" }}>
        {bug.description}
      </p>

      <br />
      <Container style={{ textAlign: "center", marginTop: "4em" }}>
        <Button
          as={Link}
          to={`/edit/${bug.id}`}
          style={{ width: "9em", margin: "1rem" }}
          color="blue"
        >
          Edit
        </Button>
        <Button
          // onClick={handleDeleteBug}
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this ticket?")
            ) {
              handleDeleteBug();
            }
          }}
          style={{ width: "9em", margin: "1rem" }}
          color="red"
        >
          Delete
        </Button>
      </Container>
    </Segment>
  );
};

const headersStyle = {
  // marginLeft: "1.2em",
};

export default observer(BugsDetails);
