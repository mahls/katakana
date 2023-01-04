import { useState } from 'react'
import './App.css'
import {Nav} from '../components/Nav.tsx'
import {KanaCard} from '../components/KanaCard.tsx'


// https://www.nhk.or.jp/lesson/en/letters/katakana.html
// change Button to AnswerButton
// change Buttons to AnswerButtons



function App() {
 
  let appStyle="h-screen bg-gradient-to-r from-stone-900 to-blue-900";

  return (
    <div className={appStyle}>
      <Nav text={'hello'}/>
      <KanaCard kanaLetter={"a"}/>
    </div>
  )

}

export default App
