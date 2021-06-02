import React, { CSSProperties } from "react";

const HomePage = () => {
  return (
    <div style={divsssStyle}>
      <h1>Ticket Tracker App</h1>
      <p style={pStyles}>
        Welcome to the ticket tracker app,{" "}
        <span style={spanStyles}>
          please click on "Tickets" in the navigation menu
        </span>{" "}
        to view a demo of the ticket tracking functionality with ability to
        create, read, update, and delete tickets
      </p>
      <hr />
      <p>Features in development:</p>
      <ul>
        <li>Login and subscribe functionality</li>
        <li>
          Autherization based features based on different levels of user
          (admins/developers)
        </li>
        <li>Refined styling for mobile devices</li>
      </ul>
    </div>
  );
};

export default HomePage;

const divsssStyle: CSSProperties = {
  backgroundColor: "#f9f8f0",
  padding: "35px",
  margin: "300px auto",
  maxWidth: "600px",
};

const pStyles: CSSProperties = {
  fontWeight: 900,
  fontSize: "18px",
};

const spanStyles: CSSProperties = {
  color: "rgb(25, 170, 120)",
  textDecoration: "underline",
};
