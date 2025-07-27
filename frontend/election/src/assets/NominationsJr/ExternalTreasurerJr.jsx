import React from 'react'

const ExternalTreasurerJr = ({JrExternal,JrTreasurer,setJrExternal,setJrTreasurer}) => {
  const JrExternalCandidates=[
        {id:'JrExternalCandidateOne',name:'Candidate One',},
        {id:'JrExternalCandidateTwo',name:'Candidate Two',},
        {id:'JrExternalCandidateThree',name:'Candidate Three',}
    ]
    const JrTreasurerCandidates=[
        {id:'JrTreasurerCandidateOne',name:'Candidate One',},
        {id:'JrTreasurerCandidateTwo',name:'Candidate Two',},
        {id:'JrTreasurerCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrExternal Secretary</p>
        {
            JrExternalCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrExternal(candidate.name)}} 
                        style={{
                            backgroundColor: JrExternal === candidate.name ? 'green' : 'white',
                            color: JrExternal === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrTreasurer</p>
        {
            JrTreasurerCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrTreasurer(candidate.name)}} 
                        style={{
                            backgroundColor: JrTreasurer === candidate.name ? 'green' : 'white',
                            color: JrTreasurer === candidate.name ? 'white' : 'black',
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

export default ExternalTreasurerJr