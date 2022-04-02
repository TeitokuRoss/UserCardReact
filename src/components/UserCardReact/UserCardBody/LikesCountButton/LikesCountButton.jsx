import { Component } from "react";
import styles from "./LikesCountButton.module.css";

class LikesCountButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { increaseLikes } = this.props;
    return (
      <button onClick={increaseLikes} className={styles.button}>
        +
      </button>
    );
  }
}
export default LikesCountButton;
