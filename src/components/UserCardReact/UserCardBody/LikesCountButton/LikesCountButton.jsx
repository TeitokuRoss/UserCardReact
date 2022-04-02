import { Component } from "react";
import styles from "./LikesCountButton.module.css";

class LikesCountButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { incraesLikes } = this.props;
    return (
      <button onClick={incraesLikes} className={styles.button}>
        +
      </button>
    );
  }
} 
export default LikesCountButton;
