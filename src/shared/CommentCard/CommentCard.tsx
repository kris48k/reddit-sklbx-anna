import React from 'react';
import { ICommentsDataAll } from '../../hooks/useCommentsData';
import { Comment } from '../../shared/CommentCard/Comment';
import styles from './commentCard.css';

interface ICommentCardProps {
  comments:  ICommentsDataAll[]
}

export function CommentCard( {comments}:ICommentCardProps) {

  return (
    <ul>
       {comments.map( data => ( data.kind !== 'more' ?
         <li key={data.data.id}>
          <div className={styles.commentCard}>
            <div className={styles.commentBtns}>
              <button className={styles.up}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
              </button>
              <button className={styles.down}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
              </button>
              <div className={styles.divider}></div>
            </div>
            <Comment {...data.data}/>
          </div>
        </li> :
        <li key={data.data.id}></li>
       ))}
    </ul>
  );
}
