import React from 'react'

interface IItem {
  id: string;
	text: string;
  onClick: (id :string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  svg?:React.ReactNode
}

interface IGenericListProps {
	list : IItem[];
}

const noop = () => {};

export function GenericList ({list}:IGenericListProps) {
  return(
    <>
       {list.map(({As = 'div', text, onClick = noop, className, id, href, svg}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {svg}
          <span>{text}</span>
        </As>
       ))}
    </>
  )
}

// interface IItem {
// 	value: string;
//   id: string;
//   onClick: (id :string) => void;
// }

// interface IMyListProps {
// 	list : IItem[];
// }

// export function MyList ({list}:IMyListProps) {
//   return(
//     <ul >
//        {list.map((item: IItem, index: number) => (
//          <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//        ))}
//     </ul>
//   )
// }
