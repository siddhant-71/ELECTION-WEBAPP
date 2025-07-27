import React from 'react'
import "./Nominations.css"

const DRs = ({DR1,DR2,ADR1,ADR2,setDR1,setDR2,setADR1,setADR2}) => {
    const DRBoysCandidates = [
    { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
    { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
    { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
  ];
  const DRGirlsCandidates = [
    { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
    { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
    { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
  ];
  const ADROneCandidates = [
    { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
    { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
    { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
  ];
  const ADRTwoCandidates = [
    { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
    { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
    { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
  ];
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>DEPARTMENT REPRESENTATIVE BOYS</p>
        {
            DRBoysCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setDR1(candidate.name)}} 
                        style={{
                            backgroundColor: DR1 === candidate.name ? 'green' : 'white',
                            color: DR1 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>ACADEMIC DEPARTMENT GIRLS</p>
        {
            DRGirlsCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setDR2(candidate.name)}} 
                        style={{
                            backgroundColor: DR2 === candidate.name ? 'green' : 'white',
                            color: DR2 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>ACADEMIC DEPARTMENT REPRESENTATIVE SEC-A</p>
        {
            ADROneCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setADR1(candidate.name)}} 
                        style={{
                            backgroundColor: ADR1 === candidate.name ? 'green' : 'white',
                            color: ADR1 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>ACADEMIC DEPARTMENT REPRESENTATIVE SEC-B</p>
        {
            ADRTwoCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setADR2(candidate.name)}} 
                        style={{
                            backgroundColor: ADR2 === candidate.name ? 'green' : 'white',
                            color: ADR2 === candidate.name ? 'white' : 'black',
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

export default DRs