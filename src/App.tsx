import { useState } from 'react'
import './App.css'
import {Nav} from '../components/Nav.tsx'
import {KanaCard} from '../components/KanaCard.tsx'


// https://www.nhk.or.jp/lesson/en/letters/katakana.html



function App() {
 
  let appStyle="h-screen bg-gradient-to-r from-blue-600 to-blue-900";


  return (
    <div className={appStyle}>
      <Nav text={'hello'}/>
      <KanaCard kanaLetter={"a"}/>
    </div>
  )

}

export default App
