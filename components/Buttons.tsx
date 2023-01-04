import React from 'react'
import {Button} from './Button.tsx'

export const Buttons: React.FC = () => {

  let buttonLetters: Array<{id: number, letter: string}> = [
    {id: Math.random(), letter: 'a'},
    {id: Math.random(), letter: 'e'},
    {id: Math.random(), letter: 'i'},
    {id: Math.random(), letter: 'o'},
    {id: Math.random(), letter: 'u'}, 
  ];

  let btnDivStyle="flex align-center bg-stone-900 p-1 w-max rounded";

  return (
    <div>
      <div className={btnDivStyle}>
      {buttonLetters.map((value)=>{
        return (
          <Button key={value.id} id={value.id} letter={value.letter} />
        )
      })}
      </div>
    </div>
  )

}

//Math.floor(Math.random() * 10); 
  
