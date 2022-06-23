import React, { useState } from 'react';
import { ICommentsData, ICommentsDataAll } from '../../../hooks/useCommentsData';
import { getCreatedDate } from '../../../utils/js/getCreatedDare';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { CommentCard } from '../CommentCard';
import { CommentFormNotControlled } from '../CommentFormNotControlled';
import { CommentMenu } from '../CommentMenu';
import styles from './comment.css';

export function Comment( props:ICommentsData) {
  let replies: Array<ICommentsDataAll> = [];
  let type = typeof props.replies;
  let isReplies: boolean = false;
  if(type !== 'string')
  {
    replies = props.replies.data.children;
    isReplies = true;
  }

  const [isReplyOpened, setIsReplyOpened] = useState(false);
  const avatar = '';

  function onReply() {
   setIsReplyOpened(!isReplyOpened);
  }
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentAboutInfo}>
        <UserLink  author={props.author_fullname} authorUrl={avatar}/>
        <span className={styles.createdAt}>
            {getCreatedDate(props.created)}
        </span>
        <span className={styles.liga}>
            {'лига кого-то'}
        </span>
      </div>

      <p className={styles.commentText}>
       {props.body}
      </p>

      <CommentMenu onReply={() => {onReply()}}/>
      {isReplyOpened &&
        <CommentFormNotControlled autor={props.author_fullname}/>
      }
      {isReplies &&
          <CommentCard comments={replies}/>
      }
    </div>
  );
}
