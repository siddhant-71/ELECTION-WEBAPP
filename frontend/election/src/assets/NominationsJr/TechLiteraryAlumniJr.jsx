import React from 'react'

const TechLiteraryAlumniJr= ({JrTechnical , JrLiterary , JrAlumni , setJrTechnical , setJrLiterary , setJrAlumni}) => {
  const JrTechnicalCandidates=[
        {id:'JrTechnicalCandidateOne',name:'Candidate One',},
        {id:'JrTechnicalCandidateTwo',name:'Candidate Two',},
        {id:'JrTechnicalCandidateThree',name:'Candidate Three',}
    ]
    const JrLiteraryCandidates=[
        {id:'JrLiteraryCandidateOne',name:'Candidate One',},
        {id:'JrLiteraryCandidateTwo',name:'Candidate Two',},
        {id:'JrLiteraryCandidateThree',name:'Candidate Three',}
    ]
    const JrAlumniCandidates=[
        {id:'JrAlumniCandidateOne',name:'Candidate One',},
        {id:'JrAlumniCandidateTwo',name:'Candidate Two',},
        {id:'JrAlumniCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrTechnical Secretary</p>
        {
            JrTechnicalCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrTechnical(candidate.name)}} 
                        style={{
                            backgroundColor: JrTechnical === candidate.name ? 'green' : 'white',
                            color: JrTechnical === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrLiterary Secretary</p>
        {
            JrLiteraryCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrLiterary(candidate.name)}} 
                        style={{
                            backgroundColor: JrLiterary === candidate.name ? 'green' : 'white',
                            color: JrLiterary === candidate.name ? 'white' : 'black',
                            cursor:'pointer'
                        }}
                    >VOTE</button>
                </div>)
            })
        }
    </div>
    <div className='PostContainer'>
        <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrAlumni Secretary</p>
        {
            JrAlumniCandidates.map((candidate)=>{
                 return (<div key={candidate.id} className='Candidate'>
                    <p className='CandidateName'>{candidate.name}</p>
                    <button onClick={(e)=>{setJrAlumni(candidate.name)}} 
                        style={{
                            backgroundColor: JrAlumni === candidate.name ? 'green' : 'white',
                            color: JrAlumni === candidate.name ? 'white' : 'black',
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

export default TechLiteraryAlumniJr