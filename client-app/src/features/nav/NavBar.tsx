import React from "react";
import { Menu, Container, Icon, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} exact to="/">
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/bugs">
          Tickets
        </Menu.Item>
        <Menu.Menu position="right">
          <Button
            as={NavLink}
            exact
            to="/createBug"
            style={{
              height: "auto",
              margin: "auto",
              marginRight: "1rem",
            }}
            color="teal"
            inverted
          >
            Create New Ticket
          </Button>
          <Menu.Item name="username">
            {" "}
            <Icon name="user"></Icon> Test User
          </Menu.Item>
          <Menu.Item name="logout">Logout</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavBar;
