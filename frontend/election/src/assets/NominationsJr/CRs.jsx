import React from 'react'
import "./NominationsJr.css"

const CRs = ({JrDR1,JrDR2,JrADR1,JrADR2,setJrDR1,setJrDR2,setJrADR1,setJrADR2}) => {
    const JrDRBoysCandidates = [
        { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
        { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
        { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
    ];
    const JrDRGirlsCandidates = [
        { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
        { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
        { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
    ];
    const JrADROneCandidates = [
        { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
        { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
        { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
    ];
    const JrADRTwoCandidates = [
        { id: 'CANDIDATE_ONE', name: 'CANDIDATE ONE FULL NAME' },
        { id: 'CANDIDATE_TWO', name: 'CANDIDATE TWO FULL NAME' },
        { id: 'CANDIDATE_THREE', name: 'CANDIDATE THREE FULL NAME' },
    ];
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>CLASS REPRESENTATIVE BOYS</p>
        {
            JrDRBoysCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrDR1(candidate.name)}} 
                        style={{
                            backgroundColor: JrDR1 === candidate.name ? 'green' : 'white',
                            color: JrDR1 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>CLASS REPRESENTATIVE GIRLS</p>
        {
            JrDRGirlsCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrDR2(candidate.name)}} 
                        style={{
                            backgroundColor: JrDR2 === candidate.name ? 'green' : 'white',
                            color: JrDR2 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>ACADEMIC CLASS REPRESENTATIVE SEC-A</p>
        {
            JrADROneCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrADR1(candidate.name)}} 
                        style={{
                            backgroundColor: JrADR1 === candidate.name ? 'green' : 'white',
                            color: JrADR1 === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>CLASS DEPARTMENT REPRESENTATIVE SEC-B</p>
        {
            JrADRTwoCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrADR2(candidate.name)}} 
                        style={{
                            backgroundColor: JrADR2 === candidate.name ? 'green' : 'white',
                            color: JrADR2 === candidate.name ? 'white' : 'black',
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

export default CRs;