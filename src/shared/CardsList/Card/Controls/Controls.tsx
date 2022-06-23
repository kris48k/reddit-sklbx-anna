import React from 'react';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  ups: number
}

export function Controls({ups} : IControlsProps) {

  return (
    <div className={styles.controls}>
      <KarmaCounter count={ups} />
      <CommentsButton  />
      <div className={styles.actions}>
        <ShareButton  />
        <SaveButton  />
      </div>
    </div>
  );
}
