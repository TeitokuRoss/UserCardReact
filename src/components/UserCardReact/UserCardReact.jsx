import React, { Component } from "react";

import UserCardHeader from "./UserCardHeader/UserCardHeader.jsx";
import UserCardBody from "./UserCardBody/UserCardBody.jsx";
import styles from "./UserCardReact.module.css";

class UserCardReact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <UserCardHeader />
        <UserCardBody />
      </article>
    );
  }
}

export default UserCardReact;
