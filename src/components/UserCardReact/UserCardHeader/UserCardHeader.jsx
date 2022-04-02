import { Component } from "react";
import styles from "./UserCardHeader.module.css";

class UserCardHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={styles.header}>
        <img
          src="https://www.kino-teatr.ru/news/16280/146942.jpg"
          className={styles.img}
        ></img>
        <p className={styles.p}>{this.props.names}</p>
      </header>
    );
  }
}

export default UserCardHeader;
