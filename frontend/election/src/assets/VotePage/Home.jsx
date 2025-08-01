import React, { useEffect, useState } from 'react'
import Vote from './Vote'
import Vote2 from './Vote2'
import axios from 'axios'

const Home = () => {
    const [departmental, setdepartmental] = useState(false)
    const [SecondYear, setSecondYear] = useState(false)
    useEffect(() => {
      const email=localStorage.getItem("email");
      async function checkSecondYear(){
        const response=await axios.get(`${process.env.VITE_BACKEND_API}/api/vote/check`,{params:{email:`${email}`}}).then(response=>{
          console.log(response.data);
          if(response.data)setdepartmental(true);
          else setSecondYear(true);
        }).catch(error=>{
          console.log(error.response.data);
        })
      }
      checkSecondYear();      
    }, [])
    
  return (
    <>
    {SecondYear && <Vote2 setSecondYear={setSecondYear} setdepartmental={setdepartmental}/>}
    {departmental && <Vote/>}
    </>
  )
}

export default Home