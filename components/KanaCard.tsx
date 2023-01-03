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

