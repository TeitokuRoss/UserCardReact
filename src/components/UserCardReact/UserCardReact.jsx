import React, { Component } from "react";

import UserCardHeader from "./UserCardHeader/UserCardHeader.jsx";
import UserCardBody from "./UserCardBody/UserCardBody.jsx";
import styles from "./UserCardReact.module.css";

class UserCardReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likesCount: 0,
    };
  }
  increasLikes = (e) => {
    const { likesCount } = this.state;
    this.setState({ likesCount: likesCount + 1 });
  };
  render() {
    const { likesCount } = this.state;
    return (
      <article>
        <UserCardHeader />
        <UserCardBody likesCount={likesCount} />
      </article>
    );
  }
}

export default UserCardReact;
