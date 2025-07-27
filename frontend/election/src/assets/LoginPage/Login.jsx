import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
    const [otpSent, setotpSent] = useState(false)
    const [email, setemail] = useState("")
    const [otp, setotp] = useState("")
    function check() {
        if(email.substring(10,30) != '@students.vnit.ac.in')return false;
        return (email.substring(0,7) == 'bt23eee' || email.substring(0,7) == 'bt24eee');
    }
    async function handleSendOtp(){
        console.log(email.substring(10,30));
        if(check()){
            //SEND OTP 
        
            //Successfully OTP sent 
            setotpSent(true);
        }
        else{
            setemail("");
            alert("wrong");
        }
    }
    async function handleSubmitOtp() {
        console.log(otp);
        //VERIFY OTP 
        /*
        if(otp verified)-> store token and email in localStorage and then navigat to vote page
        if not then -> clear otp input and then navigate to the home page 
        */       
    }
  return (
    <div className='input-box'>
        <p style={{fontSize:"25px",color:"white"}}>LOGIN HERE</p>
        <div className='input'>
            <input type="text" value={email} id='clg-email' onChange={(e)=>{setemail(e.target.value)}} placeholder='ENTER YOUR COLLEGE EMAIL' />
            <button onClick={handleSendOtp}>Send OTP</button>
        </div>
        {otpSent && <div className='input'>
            <input type="text" value={otp} id='otp' onChange={(e)=>{setotp(e.target.value)}} placeholder='ENTER OTP'/>
            <button onClick={handleSubmitOtp}>LOGIN</button>
        </div>}
    </div>
  )
}

export default Login