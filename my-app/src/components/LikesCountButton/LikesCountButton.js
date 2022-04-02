import { Component } from "react";
import styles from "./LikesCountButton.module.css";

class LikesCountButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likesCount: 0,
    };
  }
  increasLikes = (e) => {
    const { likesCount } = this.state;
    const { step } = this.props;
    this.setState({ likesCount: likesCount + step });
  };
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
