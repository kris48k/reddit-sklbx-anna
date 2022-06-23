
import React from 'react';
import { CommentsIcon, HideIcon, SaveIcon, ShareIcon, WarningIcon } from '../Icons';
import styles from './icon.css';


export enum EIcons {
  comments = 'CommentsIcon',
  hide = 'HideIcon',
  shere = 'ShareIcon',
  save = 'SaveIcon',
  warning = 'WarningIcon'
}

type TSizes = 12 | 14 | 16;

export interface IIconProps {
  name: EIcons;
  size: TSizes;
}

export function Icon(props:IIconProps) {
  return (
   svgForBlock(props)
  );
}


function svgForBlock(props:IIconProps) {
  switch(props.name){
    case EIcons.comments:
      return <CommentsIcon {...props}  />
    case EIcons.hide:
      return <HideIcon {...props} />
    case EIcons.save:
      return <SaveIcon {...props} />
    case EIcons.shere:
      return <ShareIcon {...props} />
    case EIcons.warning:
      return <WarningIcon {...props} />
    default:
      return <></>
  }
}
