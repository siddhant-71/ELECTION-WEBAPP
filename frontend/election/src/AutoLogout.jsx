import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AutoLogout = () => {
    const navigate=useNavigate();
    useEffect(() => {
      const maxSessionTime=5*1000*60;
      const loginTime=localStorage.getItem("loginTime");
      const interval=setInterval(()=>{
        const currentTime=Date.now();
        if(currentTime-loginTime >= maxSessionTime){
            localStorage.clear();
            navigate("/");
        }
      },3000);
      return ()=>clearInterval(interval);
    }, [navigate])
    
  return null;
}

export default AutoLogout