import {React, useState} from 'react'
import {MdRestartAlt} from 'react-icons/md'
import {AiOutlinePauseCircle} from 'react-icons/ai'
import {BsPlayCircle} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'

export const UtilButtons = () => {
  

  let UtilDivStlye="flex align-center items-center";
  let buttonStyle="mr-1 p4 mb-3 w-7 h-7 text-xl justify-right bg-stone-900 border border-stone-700 rounded align-center items-center flex justify-center text-white p2 hover:bg-stone-800 transition ease-in-out delay-50 ";
  let btnContent="p3";

  let PauseButton =()=>{}
  let RestartButton =()=>{}
  let playButton =()=>{}  

  return (
    <div className={UtilDivStlye}>
        
        <div className={buttonStyle}>
          <button className={btnContent}><MdRestartAlt/></button>
        </div>
        
        <div className={buttonStyle}>
          <button><AiOutlinePauseCircle/></button>
        </div>
        
        <div className={buttonStyle}>
          <button><AiOutlinePlayCircle/></button>
        </div>

    </div>
  )
}
