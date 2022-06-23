import React, { FormEvent, useRef } from 'react';
import { useIsMounted } from '../../../hooks/useIsMounted';
import styles from './commentformnotcontrolled.css';

interface ICommentFormNotControlledProps {
  autor:string
}

export function CommentFormNotControlled(props:ICommentFormNotControlledProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [isMounted] = useIsMounted();
  React.useEffect(() => {
   if(isMounted) {
    ref.current?.focus();
   }
  },[isMounted])

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} defaultValue={props.autor + ' , '}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}




