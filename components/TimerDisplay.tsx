import React from 'react'

export const TimerDisplay = () => {
  
  let TimerDisplayStyle: string ="border border-stone-700 rounded bg-stone-900 w-12 h-12 mb-3 text-white flex items-center justify-center";

  let numberStyleHigh: string = "text-stone-300 font-mono";

  let time: number = 60;
  let round: number = 1;
    
  return (
    <div className="bg-blue-400">
      <div className={TimerDisplayStyle}>
        <span className={numberStyleHigh}>{time}</span>
      </div>
  </div>
  )
}
