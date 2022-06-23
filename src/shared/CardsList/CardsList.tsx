
import * as React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostProperty, postsRequestAsync } from '../../store/posts/actions';
import { RootState } from '../../store/reducer';
import { Card } from './Card'
import styles from './cardsList.css'

export function CardsList () {
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [countLoading, setCountLoading] = useState(0);
  const [isLoadButton, setIsLoadButton] = useState(false);

  const posts = useSelector<RootState, PostProperty>(state => state.posts.data);
  const loadingAction = useSelector<RootState, boolean>(state => state.posts.loading);
  const errorLoadingAction = useSelector<RootState, string>(state => state.posts.error);
  const after = useSelector<RootState, string>(state => state.posts.after);
  const dispatch = useDispatch();

  const boottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!posts) return;
    setNextAfter(after);
  },[posts]);

  async function load() {
    dispatch(postsRequestAsync(nextAfter));
   }

   function handLoad(){
      setIsLoadButton(false);
      setCountLoading(countLoading +1);
      load();
   }

  useEffect( () => {
      const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) // значит элемент виден
       {
         if(errorLoadingAction) return;

         if(nextAfter === null)
         {
          setIsLoadButton(false);
          setErrorLoading('Больше нет данных');
          return;
         }

         if(countLoading % 3 !== 0 || countLoading ===0){
          setCountLoading(countLoading +1);
          load();
          }
          else if(countLoading !== 0)
          {
            setIsLoadButton(true);
          }
       }

    }, {
      rootMargin: '1px'
    })

    if(boottomOfList.current) {
      observer.observe(boottomOfList.current)
    }

    return () => {
      if(boottomOfList.current) {
        observer.unobserve(boottomOfList.current)
      }
    }
  },[ nextAfter])

  return(
    <ul className={styles.cardsList}>
      {!posts && !loadingAction && !errorLoading && !errorLoadingAction &&(
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      {Object.keys(posts).map(key => (
         <li key={posts[key].id}>
         <Card {...posts[key]}/>
       </li>
      ))}
     <div ref={boottomOfList} style={{textAlign: 'center'}}>
      {isLoadButton && (<button className={styles.btnLoad} onClick={handLoad}>Загрузить еще</button>)}
     </div>
      {loadingAction && <div style={{textAlign: 'center'}}>
        {'Загрузка...'}
        </div>}

      {errorLoading && <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>}
      {errorLoadingAction && <div role='alert' style={{textAlign: 'center'}}>{errorLoadingAction}</div>}
    </ul>
  )
}

