import React from 'react'

interface Props {
  id: number;
  letter: string;
  
}

let btnStyle="border border-stone-800 cursor-pointer w-16 h-16 rounded font-bold m-1 items-center align-center text-stone-100 bg-stone-900 hover:bg-stone-800 transition ease-in-out delay-10 ";


export const AnswerButton: React.FC<Props> = ({id, letter}) => {
  return (
    <div>
        <input type="button" value={letter} className={btnStyle}/>
    </div>
  )
}
