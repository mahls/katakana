import React from 'react'

export const TimerDisplay = () => {
  
  let TimerDisplayStyle: string ="border border-stone-700 rounded bg-stone-900 w-14 mb-3 text-white flex items-center justify-center";
  let numberStyleHigh: string = "text-green-500";

  let time: number = 60;
    
  return (
    <div className={TimerDisplayStyle}>
      <span className={numberStyleHigh}>{time}</span>
    </div>
  )
}
