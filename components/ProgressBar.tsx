import React from 'react'

interface Props{
  progressPercentage: number;
}


export const ProgressBar: React.FC<Props> = ({progressPercentage}) => {
  return (

     <div className='h-1 w-full bg-stone-600'>
          <div>2</div>
        <div style={{ width: `${progressPercentage}%`}} className={`h-full ${progressPercentage < 70 ? 'bg-green-600' : 'bg-green-600'}`}>
        </div>
     </div> 


  )
}

