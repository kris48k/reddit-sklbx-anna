import React, { useEffect } from "react";

interface IUseCloseModalProps {
  ref:React.RefObject<HTMLDivElement>,
  onClose?: () => void
}

export function useCloseModal(props:IUseCloseModalProps)
{
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !props.ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}
