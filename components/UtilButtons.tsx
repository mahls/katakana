import {React, useState} from 'react'
import {MdRestartAlt} from 'react-icons/md'
import {AiOutlinePauseCircle} from 'react-icons/ai'
import {BsPlayCircle} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'

export const UtilButtons = () => {
  

  let UtilDivStlye="flex align-center items-center justify-between rounded";
  
  let buttonStyle=" mr-1 mb-2 mt-2 p4 w-12 h-12 text-xl bg-stone-900 border border-stone-700 rounded align-center items-center flex justify-center text-white p2 hover:bg-stone-800 transition ease-in-out delay-50 ";
  
  let playBtnStyle=buttonStyle+"text-green-600";
  let pauseBtnStyle=buttonStyle+"text-yellow-300";
  let restartBtnStyle=buttonStyle+"text-blue-500";
  let btnContent="p3";

  let iconSize="scale-125"

  let PauseButton =()=>{}
  let RestartButton =()=>{}
  let playButton =()=>{}  

  return (
    <div className={UtilDivStlye}>
        
        <div className={playBtnStyle}>
          <button className={btnContent}><AiOutlinePlayCircle className={iconSize}/></button>
        </div>
        
        <div className={pauseBtnStyle}>
          <button><AiOutlinePauseCircle className={iconSize}/></button>
        </div>
        
        <div className={restartBtnStyle}>
          <button><MdRestartAlt className={iconSize}/></button>
        </div>

    </div>
  )
}
