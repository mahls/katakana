import { useState, useEffect } from 'react'
import './App.css'
import {Nav} from '../components/Nav.tsx'
import {KanaCard} from '../components/KanaCard.tsx'
import {MainMenu} from '../components/MainMenu.tsx'
import {aKana} from '../public/kanaLetters/aKana.png'

// https://www.nhk.or.jp/lesson/en/letters/katakana.html
//
// global state 
// - menu state
// - game state
//
// kanaCard state
// - timer state
// - kana image state
// - stop / pause state 
// - has restated state
// - score state
// - how many correct answer state 
// - how many completed state
// - has answered correctly state
// - has answered wrong state 
//
// show menu state
// wait for playSelectedState
// show a kana image and show three randoms buttons and one to match kana image
// answerbuttons needs to know kana image value can have a 
// 


function App() {
 
  let appStyle="h-screen bg-gradient-to-r from-blue-600 to-blue-900";

  const [time, setTime] = useState<number>(60);
  const [score, setScore] = useState<number>(13343);
  const [answeredCorrect, setAnsweredCorrect] = useState(4);
  const [round, setRound] = useState<number>(10);
  const [kanaImage, setKanaImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(95);

  let newKana=()=>{
     let kanaValues: string = ["A","I","U","E","O"];
     let random: number = Math.floor(Math.random()*5);
     setKanaImage(kanaValues[random]);
     console.log(kanaImage);
  };

  return (
    <div className={appStyle}>
      <Nav text={'hello'}/>
      <KanaCard 
        kanaLetter={kanaImage}
        time={time} setTime={setTime}
        
      />  
    </div>
  )

}

export default App
