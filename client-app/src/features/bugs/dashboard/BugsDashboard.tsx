import React, {
  useContext,
  useEffect,
  Fragment,
  useState,
  CSSProperties,
} from "react";
import BugListing from "./BugListing";
import { Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import BugStore from "../../../app/stores/bugStore";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const Dashboard: React.FC = () => {
  const bugStore = useContext(BugStore);

  // import store
  useEffect(() => {
    bugStore.loadBugs();
  }, [bugStore]);

  // desconstruct
  const { bugsByDate, openBugs, closedBugs, loading } = bugStore;

  // query state
  const [query, setQuery] = useState(bugsByDate);

  useEffect(() => {
    setQuery(openBugs);
  }, [openBugs]);

  // loading
  if (loading) {
    return <LoadingComponent content="loading content..." />;
  }

  return (
    <Fragment>
      <div style={buttonDivStyles}>
        <Grid columns={3} stackable container>
          <Grid.Column>
            <Button
              style={query === openBugs ? clickedStyles : buttonStyles}
              onClick={() => setQuery(openBugs)}
            >
              Open Tickets
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              style={query === closedBugs ? clickedStyles : buttonStyles}
              onClick={() => setQuery(closedBugs)}
            >
              Closed Tickets
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button
              style={query === bugsByDate ? clickedStyles : buttonStyles}
              onClick={() => setQuery(bugsByDate)}
            >
              All Tickets
            </Button>
          </Grid.Column>
        </Grid>
      </div>
      <Grid stackable columns={3}>
        {query.map((bug) => (
          <Grid.Column key={bug.id}>
            <Link to={`/bugs/${bug.id}`}>
              <BugListing bug={bug} />
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    </Fragment>
  );
  // }
};

// Style Section

const buttonStyles: CSSProperties = {
  color: "#568CA9",
  backgroundColor: "#f9f8f0",
  border: "1px solid #568CA9",
  // margin: "1rem",
  width: "140px",
};

const clickedStyles: CSSProperties = {
  color: "#f9f8f0",
  backgroundColor: "#568CA9",
  border: "1px solid #568CA9",
  // margin: "1rem",
  width: "140px",
};

const buttonDivStyles: CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  margin: "0 auto 2rem",
};

export default observer(Dashboard);
