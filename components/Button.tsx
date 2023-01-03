import React from 'react'

interface Props {
  id: number;
  letter: string;
  
}

export const Button: React.FC<Props> = ({id, letter}) => {
  return (
    <div>
      {id}
      {letter}
      <input type="button" value="A" className="border-2 border-red-500 cursor-pointer"/>
    </div>
  )
}
