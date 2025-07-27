import React from 'react'
import "./Nominations.css"

const TechLiteraryAlumni = ({Technical , Literary , Alumni , setTechnical , setLiterary , setAlumni}) => {
    const TechnicalCandidates=[
        {id:'TechnicalCandidateOne',name:'Candidate One',},
        {id:'TechnicalCandidateTwo',name:'Candidate Two',},
        {id:'TechnicalCandidateThree',name:'Candidate Three',}
    ]
    const LiteraryCandidates=[
        {id:'LiteraryCandidateOne',name:'Candidate One',},
        {id:'LiteraryCandidateTwo',name:'Candidate Two',},
        {id:'LiteraryCandidateThree',name:'Candidate Three',}
    ]
    const AlumniCandidates=[
        {id:'AlumniCandidateOne',name:'Candidate One',},
        {id:'AlumniCandidateTwo',name:'Candidate Two',},
        {id:'AlumniCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Technical Secretary</p>
        {
            TechnicalCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setTechnical(candidate.name)}} 
                        style={{
                            backgroundColor: Technical === candidate.name ? 'green' : 'white',
                            color: Technical === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Literary Secretary</p>
        {
            LiteraryCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setLiterary(candidate.name)}} 
                        style={{
                            backgroundColor: Literary === candidate.name ? 'green' : 'white',
                            color: Literary === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Alumni Secretary</p>
        {
            AlumniCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setAlumni(candidate.name)}} 
                        style={{
                            backgroundColor: Alumni === candidate.name ? 'green' : 'white',
                            color: Alumni === candidate.name ? 'white' : 'black',
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

export default TechLiteraryAlumni