// есть библиотека nanoid

import { assoc } from "../js/assoc";

//или
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

// export const assignId = assoc('id', generateRandomString());//generateRandomString вызовится дин раз
export const assignId = function() { return assoc('id', generateRandomString())};

// export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString());//generateRandomString вызовится каждый раз или:

export const generateId = <O extends object>(obj: O) => assignId()(obj);
