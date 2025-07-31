import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState("")
    useEffect(() => {
      localStorage.clear();
    }, [])
    const [password, setpassword] = useState("")
    async function handleSubmitPassword() {
        let temp=email.trimStart();
        if( (temp.substring(0,7) != 'bt23eee' && temp.substring(0,7) != 'bt24eee') || temp.substring(10,30) != '@students.vnit.ac.in'){
            alert("incorrect email check your email");
        }
        else{
                const loginBody={
                    email:`${email.trimStart()}`,
                    password:`${password}`
                }
                const response=await axios.post('http://localhost:8080/api/vote/login',loginBody)
                                .then(response=>{ 
                                    localStorage.setItem("token",response.data);
                                    localStorage.setItem("loginTime",Date.now().toString());
                                    localStorage.setItem("email",email);
                                    console.log(localStorage.getItem("token"));
                                    navigate("/Home",{ replace: true });
                                })
                                .catch(error=>{alert(error.response.data);setpassword("")});  
        }   
    }
  return (
    <div className='input-box'>
        <p style={{fontSize:"25px",color:"white"}}>LOGIN HERE</p>
        <div className='input'>
            <input type="text" value={email} id='clg-email' onChange={(e)=>{setemail(e.target.value)}} placeholder='ENTER YOUR COLLEGE EMAIL' />
            <input type="text" value={password} id='clg-password' onChange={(e)=>{setpassword(e.target.value)}} placeholder='ENTER PASSWORD'/>
            <button onClick={handleSubmitPassword}>LOGIN</button>
        </div>
    </div>
  )
}

export default Login