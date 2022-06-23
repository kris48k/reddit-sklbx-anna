import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentForm.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { valueState } from '../CommentFormContainer';

export interface ICommentFormProps {
  value: string;
 // onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: SubmitHandler<ICommentFormProps>
}


export function CommentForm({value, onSubmit}:ICommentFormProps) {
  const setValue = useSetRecoilState(valueState);
  
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    debugger;
    setValue(event.target.value);
}
const { register, handleSubmit, formState: { errors }} = useForm<ICommentFormProps>({defaultValues: {value: value}});
return (
  <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
     <textarea className={styles.input}
     aria-invalid={errors.value ? 'true' : undefined}
      {...register("value",
      { required: true,
        minLength: {
          value: 4,
          message: "Введите больше 3 символов."
        } })}  onChange={handleChange}/>
      {errors.value && (<div style={{color: 'red'}}>{"Введите больше 3 символов."}</div>)}
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>
);
}

// управляемая компонента
// export function CommentForm() {
//   const [value, setValue] = useRecoilState(valueState);

//   const[touched, setTouched] = useState(false);
//   const[valueError, setValueError] = useState('');

//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     setTouched(true);
//     setValueError(validateValue());

//     const isFormValid = !validateValue();
//     if(!isFormValid) return;

//     alert('форма отправлена')
//   }

//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
//     setValue(event.target.value);
//     console.log(value);
//    }

//   function validateValue() {
//     if(value.length <=3) return 'Введите больше 3 символов'
//     return '';
//   }

// return (
//   <form className={styles.form} onSubmit={handleSubmit}>
//     <textarea 
//     className={styles.input}
//     value={value}
//     onChange={handleChange}
//     aria-invalid = {valueError ? 'true' : undefined}
//     />
//     {touched && valueError && (<div>{valueError}</div>)}
//     <button type='submit' className={styles.button}>Коментировать</button>
//   </form>
// );
// }

