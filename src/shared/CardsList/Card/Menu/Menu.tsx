import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import { MenuList } from '../MenuList';
import styles from './menu.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
       button={
        <button className={styles.menuButton}>
          <MenuIcon />
        </button>
        }
        >
        <div className={styles.dropdown}>
         <MenuList/>
        </div>
      </Dropdown>
    </div>
  );
}
