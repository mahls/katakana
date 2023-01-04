import {React, useState, useEffect} from 'react'
import {Buttons} from './Buttons.tsx'
import aKana from '../public/kanaLetters/aKana.png'
import eKana from '../public/kanaLetters/eKana.png'
import iKana from '../public/kanaLetters/iKana.png'
import oKana from '../public/kanaLetters/oKana.png'
import uKana from '../public/kanaLetters/uKana.png'

// this component will take prop letter
// depending on the prop a different letter will render
// can be placed in a container component with buttons and timer

interface Props{kanaLetter: string;};

export const KanaCard: React.FC<Props> = ({kanaLetter}) => {

  const [randomKana, setrandomKana] = useState<string>(kanaLetter);
  const [userKanaValue, setUserKanaValue] = useState<string>("");
  
  let checkForMatch=()=>{console.log("test")};
  
  let kanaImgDivStyle="border-2 border-stone-900 rounded flex justify-center items-center p-2 pt-10 pb-10 pl-4 mb-4";
  let kanaContainerDiv="bg-stone-800 p-5 rounded shadow-2xl";
  let kanaImgStyle="rounded";

  return (

    <div className="flex flex-col mt-20 items-center">
      
      <div className={kanaContainerDiv}>

        <div className={kanaImgDivStyle}>
          <img src={aKana} className={kanaImgStyle}/>
        </div>

        <div>
          <Buttons/>
        </div>

      </div>

    </div>

  )

}

