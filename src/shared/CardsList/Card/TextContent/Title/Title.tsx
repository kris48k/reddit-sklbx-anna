import React, { useState } from 'react';
import styles from './title.css';
import { Link } from "react-router-dom";

interface ITitleProps {
  title: string,
  postId:string,
  subreddit:string,
}

export function Title( props:ITitleProps) {

  return (
    <h2 className={styles.title} >
    <Link to={`/posts/${props.postId}`} className={styles.postLink} >
     {props.title}
    </Link>
  </h2>
  );
}
