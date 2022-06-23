import React from 'react';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../GenericList';
import { EIcons, Icon } from '../../../Icon';
import styles from './menulist.css';

const LIST = [
  {As: 'li' as const, text: 'Комментарии' ,className: `${styles.menuItem} ${styles.modal}`, svg: <Icon name={EIcons.comments} size={12} /> },
  {text: '' ,className: `${styles.divider} ${styles.modal}`},
  {As: 'li' as const, text: 'Поделиться' ,className: `${styles.menuItem} ${styles.modal}`, svg: <Icon name={EIcons.shere} size={14}/>},
  {text: '' ,className: `${styles.divider} ${styles.modal}`},
  {As: 'li' as const, text: 'Скрыть' ,className: `${styles.menuItem}`, svg: <Icon name={EIcons.hide} size={16}/>},
  {text: '' ,className: `${styles.divider}`},
  {As: 'li' as const, text: 'Сохранить' ,className: `${styles.menuItem}`, svg: <Icon name={EIcons.save} size={14}/>},
  {text: '' ,className: `${styles.divider} ${styles.modal}`},
  {As: 'li' as const, text: 'Пожаловаться', className: `${styles.menuItem} ${styles.modal}`, svg: <Icon name={EIcons.warning} size={14}/>},
 // {text: 'Закрыть', className: `${styles.divClose}`}
].map(generateId);



export function MenuList() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div>
        <ul className={styles.menuItemsList}>
          <GenericList list={list.map(merge({onClick: handleItemClick}))} />
        </ul>
        <button className={styles.closeButton}>
          Закрыть
        </button>
    </div>
  );
}
