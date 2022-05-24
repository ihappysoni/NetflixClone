import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'

const Navigation = () => {
  return (
        <div className="loginSection">
          <div className="nav">
              <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" width={"200px"}/></div>
              <div className="dropBox">
                  <div className="dropLang">
                  <div><img src="https://img.icons8.com/material/344/globe--v2.png" alt="" width={"20vw"}/></div>
                  <select name="lang" id="lang">
                      <option value="eng">English</option>
                      <option value="hindi">Hindi</option>
                  </select>
                  </div>
                  <button className='sign-in'><Link to="/loginpage">Sign In</Link></button>
              </div>
              
          </div>
      </div>
  )
}

export default Navigation
