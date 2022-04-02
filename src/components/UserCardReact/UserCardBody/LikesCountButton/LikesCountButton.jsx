import { Component } from "react";
import styles from "./LikesCountButton.module.css";

class LikesCountButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { likesCount } = this.state;
    return (
      <button onClick={this.increasLikes} className={styles.button}>
        +
      </button>
    );
  }
}
export default LikesCountButton;
