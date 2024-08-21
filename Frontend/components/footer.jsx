import React from 'react'

const footer = () => {
  return (
   <footer>

    <div className='banner'>
      <div className='title'>
        <h1>EVENT MANAGEMENT 360</h1>
        <p>EVENTS AND PARTIES</p>
      </div>
      <div className='tag'>
        <label>News Letter</label>
        <div>
           <input type="text" placeholder='E-mail'></input>
           <button>Send</button>
        </div>
        <p>Sign Up With ur E-mail to recieve your Updates!</p>
      </div>
    </div>
   </footer>
  )
}

export default footer