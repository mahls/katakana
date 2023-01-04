import {React, useState, useEffect} from 'react'
import {AnswerButtons} from './AnswerButtons.tsx'
import {UtilButtons} from '../components/UtilButtons.tsx'
import {TimerDisplay} from '../components/TimerDisplay.tsx'
import aKana from '../public/kanaLetters/aKana.png'
import eKana from '../public/kanaLetters/eKana.png'
import iKana from '../public/kanaLetters/iKana.png'
import oKana from '../public/kanaLetters/oKana.png'
import uKana from '../public/kanaLetters/uKana.png'

interface Props{kanaLetter: string;};

export const KanaCard: React.FC<Props> = ({kanaLetter}) => {

  const [randomKana, setrandomKana] = useState<string>(kanaLetter);
  const [userKanaValue, setUserKanaValue] = useState<string>("");

  let kanaImages: string = ['aKana', 'eKana', 'iKana', 'oKana', 'uKana'];
  
  let checkForMatch=()=>{console.log("test")};
  
  let kanaImgDivStyle="border-b border-t border-stone-900 rounded flex justify-center items-center p-2 pt-20 pb-20 pl-4";
  let kanaContainerDiv="bg-stone-800 rounded w-96 shadow-2xl";
  let kanaImgStyle="rounded invert";

  return (

    <div className="flex flex-col mt-28 items-center align-center">
      
      <div className={kanaContainerDiv}>

        <div className="flex align-center items-center bg-purple-500">
          <div>
            <UtilButtons/>
          </div>
          <div>
            <TimerDisplay/>
          </div>
        </div>

        <div className={kanaImgDivStyle}>
          <img src={aKana} className={kanaImgStyle}/>
        </div>
        
        <div className="bg-red-500">
          <AnswerButtons/>
        </div>

      </div>

    </div>

  )

}

