import { useState } from 'react'
import './App.css'
import {Nav} from '../components/Nav.tsx'
import {KanaCard} from '../components/KanaCard.tsx'
//https://www.nhk.or.jp/lesson/en/letters/katakana.html

function App() {

  return (
    <div>
      <Nav text={'hello'}/>
      <KanaCard kanaLetter={"a"}/>
    </div>
  )

}

export default App
