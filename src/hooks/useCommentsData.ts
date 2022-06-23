import { useContext, useEffect, useState } from "react";
import axios from 'axios';

export interface ICommentsDataAll {
  kind: string;
  data: ICommentsData
}

export interface ICommentsData {
  id:string,
  body: string,
  subreddit_name_prefixed: string,
  name: string,
  author_fullname: string,
  replies: IRepliesDataProps
  created: number
}

export interface IRepliesDataProps {
  data: IRepliesChildren
}

interface IRepliesChildren {
  children: ICommentsDataAll[]
}

interface ICommentsDataProps {
  postId: string
  subreddit: string;
}

export function useCommentsData(props:ICommentsDataProps) {
  const [data, setData] = useState<Array<ICommentsDataAll> | undefined>([]);
  useEffect(() => {
    axios.get(`http://api.reddit.com/${props.subreddit}/comments/${props.postId}`,
      {
        headers: {}
      })
    .then((resp) => {
      setData(resp.data[1].data.children);
    })
    .catch(console.log);
    }, [])

  return [data]
}

