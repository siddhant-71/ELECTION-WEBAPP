import React from 'react'

const CulturalsJr = ({JrCult1,JrCult2,JrCult3,setJrCult1,setJrCult2,setJrCult3}) => {
  const JrCulturalCandidates=[
        {id:'JrCulturalCandidateOne',name:'Candidate One',},
        {id:'JrCulturalCandidateTwo',name:'Candidate Two',},
        {id:'JrCulturalCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCultural One</p>
            {
                JrCulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCult2===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return;
                            }
                            if(JrCult3===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return ;
                            }
                            setJrCult1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCult1 === candidate.name ? 'green' : 'white',
                                color: JrCult1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCultural Two</p>
            {
                JrCulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCult1===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return;
                            }
                            if(JrCult3===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return ;
                            }
                            setJrCult2(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCult2 === candidate.name ? 'green' : 'white',
                                color: JrCult2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCultural Three</p>
            {
                JrCulturalCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCult2===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return;
                            }
                            if(JrCult1===candidate.name){
                                alert("You Already Selected This Candidate for JrCultural Post");
                                return ;
                            }
                            setJrCult3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCult3 === candidate.name ? 'green' : 'white',
                                color: JrCult3 === candidate.name ? 'white' : 'black',
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

export default CulturalsJr