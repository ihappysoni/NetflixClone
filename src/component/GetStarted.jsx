import React from 'react'

const GetStarted = () => {
  return (
    <>
    <div id='getStarted'>
      <div className="textStart">
      <h1>Unlimited movies, TV shows and more.</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? Enter your email to create or restart your membership.</p> 
      </div>

      <div className="detail">
         <input type="email" name="" id="inp" placeholder='Email Address'/>
         <button id='gs'>Get Started <span id='rightArrow'>></span></button>
      </div>
    </div>
    </>
    
  )
}

export default GetStarted
