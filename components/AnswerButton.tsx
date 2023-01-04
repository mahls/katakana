import React from 'react'

interface Props {
  id: number;
  letter: string;
  
}

let btnStyle="border border-stone-800 cursor-pointer w-10 rounded font-bold m-1 flex items-center justify-center text-stone-100 bg-stone-900 hover:bg-stone-800 transition ease-in-out delay-50 ";


export const AnswerButton: React.FC<Props> = ({id, letter}) => {
  return (
    <div>
        <input type="button" value={letter} className={btnStyle}/>
    </div>
  )
}
