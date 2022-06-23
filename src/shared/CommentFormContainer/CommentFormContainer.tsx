import { makeAutoObservable } from 'mobx';
import React, { ChangeEvent, FormEvent} from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm, ICommentFormProps } from '../CommentForm/CommentForm';
import {
  atom,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const valueState = atom({
  key: 'valueState', 
  default: 'привкт из recoil', 
});
// управляемая компонента
export function CommentFormContainer() {
const value = useRecoilValue(valueState);

// function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
//   setValue(event.target.value);
// }

const handleSubmit: SubmitHandler<ICommentFormProps> = data => {
  console.log(data);
  console.log(value);
}


return (
  <>
<CommentForm
  value={value}
  //onChange={handleChange}
  onSubmit={handleSubmit}
/>
</>
);
}

