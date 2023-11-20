import React from 'react'

import './quizcode.css'

const Quizcode = () => {
  return (
    <div className='codecontainer'>
      <div className="codeheader">
        <div className="codetext">Verification Code</div>
        <div className="codeunderline"></div>
      </div>
      <div className="codeinputs">
      <div className="codeinput">
       <input type="codetext" placeholder='Code' />
      </div>
      </div>
      <div className='codesubmit-container'>
        <div className='codesubmit'>OK</div>
      </div>

    </div>

    
      
  )
}

export default Quizcode;
