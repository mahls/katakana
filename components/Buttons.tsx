import React from 'react'

export const Buttons: React.FC = () => {
  return (
    <div>
      <div>
        <input type="submit"/>
        <input type="input"/>
        <input type="button" value="submit" onClick={checkForMatch}/>
        <input type=""/>
      </div>
    </div>
  )
}
