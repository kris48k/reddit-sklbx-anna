import React from 'react';
import { merge } from '../../../utils/js/merge';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { GenericList } from '../../GenericList';
import { EIcons, Icon } from '../../Icon';
import styles from './commentMenu.css';

const LIST = [
  { text: 'Ответить' ,className: `${styles.menuItem}`, svg: <Icon name={EIcons.comments} size={12} /> },

  { text: 'Поделиться' ,className: `${styles.menuItem}`, svg: <Icon name={EIcons.shere} size={14}/>},

  { text: 'Пожаловаться', className: `${styles.menuItem}`, svg: <Icon name={EIcons.warning} size={14}/>},
].map(generateId);

interface ICommentMenu {
  onReply?: () => void;
}

export function CommentMenu(props:ICommentMenu) {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    //setList(list.filter((item) => item.id !== id));
    let btn = list.find((item) => item.id === id);
    if(btn?.text === 'Ответить'){
      console.log('menu')
      props.onReply?.();
    }
  }

  return (
    <div className={styles.menuItemsListFlex}>
      <GenericList list={list.map(merge({onClick: handleItemClick}))} />
    </div>
  );
}
