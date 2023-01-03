import {React, useState, useEffect} from 'react'
import {Buttons} from './Buttons.tsx'
import aKana from '../public/kanaLetters/aKana.png'

interface Props{kanaLetter: string;};

export const KanaCard: React.FC<Props> = ({kanaLetter}) => {

  const [randomKana, setrandomKana] = useState<string>(kanaLetter);
  const [userKanaValue, setUserKanaValue] = useState<string>("");
  let checkForMatch=()=>{console.log("test")};

  return (

    <div className="flex flex-col">
      
      <div>
        {randomKana}
        <img src={aKana}/>
        <Buttons/>
      </div>

    </div>

  )

}

