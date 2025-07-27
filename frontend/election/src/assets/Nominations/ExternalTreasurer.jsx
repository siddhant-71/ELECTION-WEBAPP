import React from 'react'
import "./Nominations.css"

const ExternalTreasurer = ({External,Treasurer,setExternal,setTreasurer}) => {
    const ExternalCandidates=[
        {id:'ExternalCandidateOne',name:'Candidate One',},
        {id:'ExternalCandidateTwo',name:'Candidate Two',},
        {id:'ExternalCandidateThree',name:'Candidate Three',}
    ]
    const TreasurerCandidates=[
        {id:'TreasurerCandidateOne',name:'Candidate One',},
        {id:'TreasurerCandidateTwo',name:'Candidate Two',},
        {id:'TreasurerCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>External Secretary</p>
        {
            ExternalCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setExternal(candidate.name)}} 
                        style={{
                            backgroundColor: External === candidate.name ? 'green' : 'white',
                            color: External === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Treasurer</p>
        {
            TreasurerCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setTreasurer(candidate.name)}} 
                        style={{
                            backgroundColor: Treasurer === candidate.name ? 'green' : 'white',
                            color: Treasurer === candidate.name ? 'white' : 'black',
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

export default ExternalTreasurer