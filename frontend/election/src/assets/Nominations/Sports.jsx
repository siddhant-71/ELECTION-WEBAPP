import React from 'react'
import "./Nominations.css"

const Sports = ({Sports1,Sports2,Sports3,setSports1,setSports2,setSports3}) => {
    const SportsBoys1Candidates=[
        {id:'BoysSportsOne',name:'Candidate One',},
        {id:'BoysSportsTwo',name:'Candidate Two',},
        {id:'BoysSportsThree',name:'Candidate Three',}
    ]
    const SportsBoys2Candidates=[
        {id:'BoysSportsOne',name:'Candidate One',},
        {id:'BoysSportsTwo',name:'Candidate Two',},
        {id:'BoysSportsThree',name:'Candidate Three',}
    ]
    const SportsGirlsCandidates=[
        {id:'BoysSportsOne',name:'Candidate One',},
        {id:'BoysSportsTwo',name:'Candidate Two',},
        {id:'BoysSportsThree',name:'Candidate Three',}
    ]
  return (
    <>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Sports Boys One</p>
            {
                SportsBoys1Candidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Sports2===candidate.name){
                                alert("This Candidate is already Selected for Sports Boys Two")
                                return;
                            }
                            setSports1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Sports1 === candidate.name ? 'green' : 'white',
                                color: Sports1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
        </div>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Sports Boys Two</p>
            {
                SportsBoys2Candidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={
                            (e)=>{
                                if(Sports1===candidate.name){
                                alert("This Candidate is already Selected for Sports Boys One")
                                return;
                            }
                                setSports2(candidate.name)
                            }} 
                            style={{
                                backgroundColor: Sports2 === candidate.name ? 'green' : 'white',
                                color: Sports2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
        </div>
        <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Sports Girls</p>
            {
                SportsGirlsCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            setSports3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Sports3 === candidate.name ? 'green' : 'white',
                                color: Sports3 === candidate.name ? 'white' : 'black',
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

export default Sports