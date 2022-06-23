import React from 'react';
import { getCreatedDate } from '../../../../utils/js/getCreatedDare';
import styles from './textContent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  createDate: number,
  namePost: string,
  author:string,
  avatar: string,
  postId:string,
  subreddit: string
}

export function TextContent(props:ITextContentProps) {
  let crData = getCreatedDate(props.createDate);
  let propsForTitle = {
    title: props.namePost,
    postId:props.postId,
    subreddit: props.subreddit
  }
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink  author={props.author} authorUrl={props.avatar}/>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опублековано</span>
          {crData}
        </span>
      </div>
      <Title {...propsForTitle}/>
    </div>
  );
}
