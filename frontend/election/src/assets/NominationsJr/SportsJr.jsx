import React from 'react'
import "./NominationsJr.css"

const SportsJr = ({JrSports1,JrSports2,JrSports3,setJrSports1,setJrSports2,setJrSports3}) => {
    const JrSportsBoys1Candidates=[
        {id:'BoysJrSportsOne',name:'Candidate One',},
        {id:'BoysJrSportsTwo',name:'Candidate Two',},
        {id:'BoysJrSportsThree',name:'Candidate Three',}
    ]
    const JrSportsBoys2Candidates=[
        {id:'BoysJrSportsOne',name:'Candidate One',},
        {id:'BoysJrSportsTwo',name:'Candidate Two',},
        {id:'BoysJrSportsThree',name:'Candidate Three',}
    ]
    const JrSportsGirlsCandidates=[
        {id:'BoysJrSportsOne',name:'Candidate One',},
        {id:'BoysJrSportsTwo',name:'Candidate Two',},
        {id:'BoysJrSportsThree',name:'Candidate Three',}
    ]
  return (
    <>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrSports Boys One</p>
            {
                JrSportsBoys1Candidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrSports2===candidate.name){
                                alert("This Candidate is already Selected for JrSports Boys Two")
                                return;
                            }
                            setJrSports1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrSports1 === candidate.name ? 'green' : 'white',
                                color: JrSports1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
        </div>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrSports Boys Two</p>
            {
                JrSportsBoys2Candidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={
                            (e)=>{
                                if(JrSports1===candidate.name){
                                alert("This Candidate is already Selected for JrSports Boys One")
                                return;
                            }
                                setJrSports2(candidate.name)
                            }} 
                            style={{
                                backgroundColor: JrSports2 === candidate.name ? 'green' : 'white',
                                color: JrSports2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
        </div>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrSports Girls</p>
            {
                JrSportsGirlsCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            setJrSports3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrSports3 === candidate.name ? 'green' : 'white',
                                color: JrSports3 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
        </div>
    </>
  )
}

export default SportsJr