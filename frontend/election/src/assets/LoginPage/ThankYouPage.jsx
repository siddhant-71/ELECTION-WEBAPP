import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navigate=useNavigate();
    useEffect(() => {
        localStorage.clear();
      const timer=setTimeout(()=>{
        navigate("/",{ replace: true });
      },30000000);
    }, [])
    
  return (
    <div style={{fontSize:"54px" , color:'white'}}>
        <p>Thank You !!!</p>
    </div>
  )
}

export default ThankYouPage