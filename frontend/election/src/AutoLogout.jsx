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

<<<<<<< HEAD
export default AutoLogout
=======
export default AutoLogout
>>>>>>> e94dad97f081f6064982854952d3420d46908cd6
