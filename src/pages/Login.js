import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        const flag = number.split("").every((el) => el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57);
        if (number === "" || number.length !== 10 || !flag) {
            alert("Please enter a valid 10-digit mobile number");
            return;
        }
        localStorage.setItem("phone",number);
        try {
            const result = await fetch("https://staging.fastor.in/v1/pwa/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    "phone": number,
                    "dial_code": "+91"
                })
            });

            const data = await result.json();

            if (data.status === "Success") {
                navigate("/otp");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    }


    return (
        <div className='container'>
            <form className='form'>
                <h1 className='form-title'>Enter Your Mobile Number</h1>
                <p className='form-text'>We will send you the 6 digit verification code</p>
                <input type='text' placeholder='Enter your mobile number' className='mob-input' onChange={(e) => setNumber(e.target.value)} value={number} />
                <button className='send-btn' onClick={loginHandler}>Send Code</button> 
            </form>
        </div>
    )
}

export default Login;
