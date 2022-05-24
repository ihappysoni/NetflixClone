import React from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        <div className="que">
          <div className="q">What is Netflix?</div>
          <div className="icon4">+</div>
        </div>
        <div className="que">
          <div className="q">How much does Netflix costs?</div>
          <div className="icon4">+</div>
        </div>
        <div className="que">
          <div className="q">Where can i watch?</div>
          <div className="icon4">+</div>
        </div>
        <div className="que">
          <div className="q">What can i watch on Netflix?</div>
          <div className="icon4">+</div>
        </div>
        <div className="que">
          <div className="q">How do i cancel?</div>
          <div className="icon4">+</div>
        </div>
        <div className="que">
          <div className="q">Is Netflix good for kids?</div>
          <div className="icon4">+</div>
        </div>
      </div>
      <div className="agn">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="detail">
          <input type="email" name="" id="inp" placeholder="Email Address" />
          <button id="gs">
            Get Started{" "}
            <span id="rightArrow">
              <Link to="/">></Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
