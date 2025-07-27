import React, { useEffect, useState } from 'react'
import Vote from './Vote'
import Vote2 from './Vote2'

const Home = () => {
    const [departmental, setdepartmental] = useState(false)
    const [SecondYear, setSecondYear] = useState(false)
    useEffect(() => {
        const email=localStorage.getItem("email")
        if(email[3]=='4'){
            setSecondYear(true);
            setdepartmental(false);
        }
        else{
            setdepartmental(true);
            setSecondYear(false);
        }
      
    }, [])
    
  return (
    <>
    {SecondYear && <Vote2 setSecondYear={setSecondYear} setdepartmental={setdepartmental}/>}
    {departmental && <Vote/>}
    </>
  )
}

export default Home