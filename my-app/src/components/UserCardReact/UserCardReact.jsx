import React, { Component } from "react";
import UserCardHeader from "./UserCardHeader/UserCardHeader";
import styles from "./UserCardReact.module.css";

class UserCardReact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { likesCount } = this.state;
    return (
      <article>
        <UserCardHeader />
        
        <UserCardBody />
      </article>
    );
  }
}
