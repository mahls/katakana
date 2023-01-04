import {React, useState} from 'react'
import {KanaChartModel} from '../components/KanaChartModel.tsx'
import {BsQuestionSquare} from 'react-icons/bs'


export const Nav: React.FC<Props> = ({text}) => {


  const [showModal, setshowModal] = useState<bool> (true)

  let navStyle="pl-2 pr-2 flex justify-between shadow-xl bg-stone-900 h-10 items-center text-stone-300";
  let reviewKanaBtn="text-white border border-stone-700 px-2 rounded cursor-pointer hover:bg-stone-800 transition ease-in-out delay-50";

  let mutateModal=()=>{ setshowModal(!showModal); console.log(showModal);}

  return (
  <>
    <div className={navStyle}>
      <div>
        <p>React Learn Katakana</p>
      </div>
      <div className="flex align-center items-center">
        <input type="button" value="Review Kana" className={reviewKanaBtn} onClick={mutateModal}/>
        <BsQuestionSquare className=" ml-2 text-stone-300 text-xl cursor-pointer hover:bg-stone-700 transition ease-in-out delay-50"/>
      </div>
 
    </div>
    
    <div>
    { showModal && <KanaChartModel/>} 
    </div>
  </>
  )
}

