import React from 'react'

export const ScoreDisplay: React.FC = () => {
  
  
  let ScoreDisplayStyle: string ="border border-stone-700 rounded bg-stone-900 w-16 h-12 ml-1 text-white flex items-center justify-center";
  let RoundDisplayStyle: string ="border border-stone-700 rounded bg-stone-900 w-12 h-12 ml-1 text-white flex items-center justify-center";
  

  let numberStyle: string = "text-stone-300 font-mono";

  let score = 13343;
    
  return (
    <div className="flex justify-between">
      <div className={ScoreDisplayStyle}>
        <span className={numberStyle}>{score}</span>
      </div>
      <div className={RoundDisplayStyle}>
        <span className={numberStyle}>4</span>
      </div>
      <div className={RoundDisplayStyle}>
        <span className={numberStyle}>10</span>
      </div>
    </div>
  )
}
