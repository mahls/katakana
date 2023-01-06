import React from 'react'


interface Props{

}

export const TimerDisplay: React.FC<Props> = ({time, setTime}) => {
  
  let TimerDisplayStyle: string ="border border-stone-700 rounded bg-stone-900 w-12 h-12 text-white flex items-center justify-center cursor-pointer";

  let numberStyleHigh: string = "text-stone-300 font-mono";

  let round: number = 1;


  let handleTime=()=>{
    console.log("running timer...");
    while(time>0){
      console.log(time);
      console.log("loop");
      setTimeout(()=>{setTime(time-1)},1000);
    };
  };


    
  return (
    <div className="">
      <div className={TimerDisplayStyle} onClick={handleTime}>
        <span className={numberStyleHigh}>{time}</span>
      </div>
  </div>
  )
}
