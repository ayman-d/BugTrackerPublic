import React, { Fragment } from "react";
import HomePage from "../../features/home/HomePage";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import NavBar from "../../features/nav/NavBar";
import BugsDashboard from "../../features/bugs/dashboard/BugsDashboard";
import { Container } from "semantic-ui-react";
import BugsDetails from "../../features/bugs/details/BugsDetails";
import BugForm from "../../features/bugs/form/BugForm";
import { observer } from "mobx-react-lite";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/bugs" component={BugsDashboard} />
        <Route path="/bugs/:id" component={BugsDetails} />
        <Route
          key={location.key}
          path={["/createBug", "/edit/:id"]}
          component={BugForm}
        />
      </Container>
    </Fragment>
  );
};

// IMPORTANT:
// we use the Route Props here to get access to the location of the route/component
// the reason for this is that we can use location.key (which changes with every different route) to RE-RENDER the component we're on,
// which is in this case the BugForm. the reason for that is if we are in the edit page for example, and we click on the create bug
// button, react won't know that it's a different component and it'll keep the state without updating it, so we need to do this so
// that react knows this is a new route component and will recalculate what the state is (existing => new)
// ** use this whenever the same component is used in more than 1 link
// add the App type at the top, and the withRouter higher order function at the bottom to do this

export default withRouter(observer(App));
