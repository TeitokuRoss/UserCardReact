import { Component } from "react";
import styles from "./UserCardBody.module.css";
import LikesCountButton from "./LikesCountButton/LikesCountButton.jsx";

class UserCardBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { likesCount } = this.props;
    return (
      <div>
        <LikesCountButton />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p>Tweets</p>
            <p>3242</p>
          </li>
          <li className={styles.li}>
            <p>Following</p>
            <p>12312</p>
          </li>
          <li className={styles.li}>
            <p>Followers</p>
            <p>{likesCount}</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default UserCardBody;
