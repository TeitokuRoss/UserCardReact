import { Component } from "react";
import styles from "./UserCardBody.module.css";
class UserCardBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p>Tweets</p>
            <p></p>
          </li>
          <li className={styles.li}>
            <p>Following</p>
            <p></p>
          </li>
          <li className={styles.li}>
            <p>Followers</p>
            <p></p>
          </li>
        </ul>
      </div>
    );
  }
}
export default UserCardBody;
