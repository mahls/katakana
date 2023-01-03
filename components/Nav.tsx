import {React, useState} from 'react'

interface Person {
    age: number,
    name: string,
  }

interface Props {
  text: string;
  ok?: boolean;
  //person: Person
}

export const Nav: React.FC<Props> = ({text}) => {
 
  const [count, setcount] = useState<number | null>(0);


  return (
    <div className=" pl-2 pr-2 flex justify-between text-white border-b border-stone-500 bg-stone-900 h-10 items-center">
      
      <div>
        <p>React Learn Katakana</p>
      </div>

    </div>
  )
}

