import React, { useState } from 'react';
import OTPInput from "otp-input-react";
import "./Otp.css";
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();


  const otpHandler = async(e) => {
    e.preventDefault();
    if(!otp || otp.length!==6 || otp!=="123456"){
      alert("Please enter valid otp");
      return;
    }

    try {
      const result = await fetch("https://staging.fastor.in/v1/pwa/user/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            "phone": localStorage.getItem("phone"),
             "otp": otp,
           "dial_code": "+91"
       })
      });

      const data = await result.json();

      if (data.status === "Success") {
        localStorage.setItem("token",data.data.token);
        navigate("/home");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
  }
   
  }

  return (
    <div className='otp-container'>
        <form className='otp-form'>
            <h1 className='otp-form-title'>OTP Verification</h1>
            <p className='otp-form-text'>Enter the verification code we just sent on uour mobile number</p>
            <div className='otp-box'>
              <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure className="otp-input"/>
            </div>
            <button className='verify-btn' onClick={otpHandler}>Verify</button>
            <p className='post-form'>Didn't received code? <span className='resend'>Resend</span></p>
        </form>
        
    </div>
  )
}

export default Otp;