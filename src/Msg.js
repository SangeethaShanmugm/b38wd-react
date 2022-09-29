import React from 'react';
import { Counter } from './Counter';

//{} - template literals
export function Msg({ name, pic }) {

  return (
    <div>
      <img className="profile-pic" src={pic}></img>
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}
