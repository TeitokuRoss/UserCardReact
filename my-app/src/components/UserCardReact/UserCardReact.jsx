import React, { Component } from 'react';
import styles from "./UserCardReact.module.css";



class UserCardReact extends Component {
    constructor(props){
        super(props);

        this.state={
            likesCount: 0,
        };
    }
    increasLikes = e =>{
        const { likesCount } = this.state;
        const { step } = this.props;
        this.setState({ likesCount: likesCount + step});
    }
    render(){
        const { likesCount } = this.state;
        return(
            <article>
                
            </article>
        );
    }
}



