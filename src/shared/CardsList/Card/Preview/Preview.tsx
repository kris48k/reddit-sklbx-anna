import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  url: string;
  enabled:boolean
}

export function Preview({url, enabled}: IPreviewProps) {
  const defurl = 'https://s3-alpha-sig.figma.com/img/b1e0/91a0/050c2a67a7a6312771a79882c0309033?Expires=1654473600&Signature=XlKBUTsSClOD2IOVAJe70PXL-f1yi~5k02JR2qrfelBhWqdMYcOAoJ33t~0iYg5LUcy1wUsveeSI1GuIltc9aRQk9IctT1L1Ip8RlxKkNmwqWQ-qTIsch599KFmRgTGDQHoBr5ZHrk-VQnVtwTW6fnIMOmMhEnitMjCrwDGHXMA7WcX8UHFspsc~-5yC72oSlAIePZStl~hiMLGRJ7AbVK-A-YtzU5S9W9EOSFRV9BRiM6~7Cp3jx5Nkx~1yu2NI3MUVLyzsH4PnuC8et-4~TeNNGcFQo4k7JfC-z1umFeD-EYL76QRqzrOdhjA6Nf26yT9nzPCe6nriUpi10uAjyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg}
      src={enabled ? url : defurl }
      alt="картинка" />
    </div>
  );
}
