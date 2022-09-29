import React from 'react';
import { useState } from 'react';
import { AddColor } from './AddColor';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <>
      {/* onClick - camelCase */}
      <button onClick={() => { setLike(like + 1); }}>👍 {like}</button>
      <button onClick={() => { setDislike(dislike + 1); }}>👎 {dislike}</button>
      {/* <AddColor /> */}
    </>
  );
}
