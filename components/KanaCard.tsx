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
  
  let kanaImgDivStyle="border-2 border-stone-900 rounded flex justify-center items-center p-2 pt-10 pb-10 pl-4 mb-4";
  let kanaContainerDiv="bg-stone-800 p-8 rounded shadow-2xl";
  let testStyle="w-72 h-72 bg-white bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg p-5";
  let kanaImgStyle="rounded";

  return (

    <div className="flex flex-col mt-40 items-center">
      
      <div className={kanaContainerDiv}>

        <div className="flex">
          <UtilButtons/>
          <TimerDisplay/>
        </div>

        <div className={kanaImgDivStyle}>
          <img src={aKana} className={kanaImgStyle}/>
        </div>

        <div><AnswerButtons/></div>

      </div>

    </div>

  )

}

