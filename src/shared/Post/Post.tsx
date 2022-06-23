import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ICommentsDataAll, useCommentsData } from '../../hooks/useCommentsData';
import { CommentCard } from '../CommentCard';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';
import {  useHistory ,useParams, RouteComponentProps} from "react-router-dom";
import { IPostData } from '../../store/posts/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { CommentForm } from '../CommentForm';

interface IPost {
  id: string
}

export function Post() {
  let params = useParams<IPost>();
  const post = useSelector<RootState, IPostData>(state => state.posts.data[params.id]);
  const history = useHistory()
  const [data] = useCommentsData({
    postId: post?.id,
    subreddit:  post?.subreddit_name_prefixed });
  let list: ICommentsDataAll[] = [];
  if(data)
    list = data;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts')
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if(!node) return null;
  return ReactDOM.createPortal((
    <div className={styles.modal} style={{ top: `${window.pageYOffset + 70}px` }} ref={ref}>
     {post && (
       <div>
          <h2>{post.title}</h2>
            <div className={styles.content}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi temporibus, possimus voluptatem sint fuga consequuntur a, maiores reprehenderit rerum quae commodi autem accusamus quis nulla nam porro veritatis impedit dolorum.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi temporibus, possimus voluptatem sint fuga consequuntur a, maiores reprehenderit rerum quae commodi autem accusamus quis nulla nam porro veritatis impedit dolorum.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi temporibus, possimus voluptatem sint fuga consequuntur a, maiores reprehenderit rerum quae commodi autem accusamus quis nulla nam porro veritatis impedit dolorum.</p>
            </div>
            <CommentFormContainer />
            {/* <CommentForm /> */}
            <div className={styles.divider}></div>

            <CommentCard comments={list}/>
       </div>
     )}
     {!post && (
       <div>Пост не найден</div>
     )}
    </div>
  ), node);
}


