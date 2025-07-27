import React from 'react'
import "./Nominations.css"

const Culturals = ({Cult1,Cult2,Cult3,setCult1,setCult2,setCult3}) => {
    const CulturalCandidates=[
        {id:'CulturalCandidateOne',name:'Candidate One',},
        {id:'CulturalCandidateTwo',name:'Candidate Two',},
        {id:'CulturalCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Cultural One</p>
            {
                CulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Cult2===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return;
                            }
                            if(Cult3===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return ;
                            }
                            setCult1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Cult1 === candidate.name ? 'green' : 'white',
                                color: Cult1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Cultural Two</p>
            {
                CulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Cult1===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return;
                            }
                            if(Cult3===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return ;
                            }
                            setCult2(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Cult2 === candidate.name ? 'green' : 'white',
                                color: Cult2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Cultural Three</p>
            {
                CulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Cult2===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return;
                            }
                            if(Cult1===candidate.name){
                                alert("You Already Selected This Candidate for Cultural Post");
                                return ;
                            }
                            setCult3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Cult3 === candidate.name ? 'green' : 'white',
                                color: Cult3 === candidate.name ? 'white' : 'black',
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

export default Culturals