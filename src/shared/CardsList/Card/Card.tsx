
import * as React from 'react'
import { IPostData } from '../../../store/posts/actions'
import styles from './card.css'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'


export function Card (props: IPostData) {
  const {author, title, created,  url, sr_detail, ups ,preview,id,subreddit_name_prefixed} = props;
  let enabled = false;
  if(preview !== undefined)
    enabled = preview.enabled;
  return(
  <div className={styles.card}>
      <TextContent author={sr_detail.display_name_prefixed}
                    namePost={title}
                    createDate={created}
                    avatar={sr_detail.icon_img}
                    postId={id}
                    subreddit={subreddit_name_prefixed} />
      <Preview url={url} enabled={enabled}/>
      <Menu  />
      <Controls  ups={ups}/>
  </div>
)
}
