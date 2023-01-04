import React from 'react'
import {AnswerButton} from './AnswerButton.tsx'

export const AnswerButtons: React.FC = () => {

  let buttonLetters: Array<{id: number, letter: string}> = [
    {id: Math.random(), letter: 'A'},
    {id: Math.random(), letter: 'E'},
    {id: Math.random(), letter: 'I'},
    {id: Math.random(), letter: 'O'},
    {id: Math.random(), letter: 'U'}, 
  ];

  let btnDivStyle=" bg-red-900 rounded-b";

  return (
      <div className="bg-stone-900 p-2 flex justify-between">
        {buttonLetters.map((value)=>{
          return (
            <div>
              <AnswerButton key={value.id} id={value.id} letter={value.letter} />
            </div>
          )
        })}
      </div>
  )

}

//Math.floor(Math.random() * 10);
//Randomly select three letters and have one letter match the kana displaye 
  
