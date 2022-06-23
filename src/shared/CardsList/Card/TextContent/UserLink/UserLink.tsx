import React from 'react';
import styles from './userLink.css';

interface IUserLinkProps {
  author: string,
  authorUrl: string
}

export function UserLink({author,authorUrl }:IUserLinkProps) {
  const defurl = 'https://s3-alpha-sig.figma.com/img/06be/5aa1/ceb17f0a2c236eb7ea1c4dfb38af6b24?Expires=1654473600&Signature=PWi14I2XMkquo54vv7zahSjLiTSmenl0J9gDDpkvesW4os0-2xIt7593OXSujNnEBpD24vFSXC~JVHOd5V~fAbBwCvekhXD61FAAWq6mhXQ~a7zzmIJyQvHBFXVCSUGwqOZL2Kwvvz2IEd4B47VbAodxyn~NsAYV1Tvp~oFOteY1ORqHQYZZvt3XAvvdhjxAwzK9Lcat4PmE7GzdmRNSmCZ-xjB7QLJNkzS7-cBZfvI9HOmwznGuIKI-HnlSPN9VSHxBMKzdz96j7kIdch~asWhkEbWqWB22PrnVjNXo50-0stUC1U1f7sb3DeHuu~RUqEgYtNpoHY8bB3w6RxaKpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar}
      src={authorUrl === '' ? defurl : authorUrl}
       alt="avatar" />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}


