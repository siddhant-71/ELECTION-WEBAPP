import React from 'react'

const CreativeJr = ({JrCreative1,JrCreative2,JrCreative3,setJrCreative1,setJrCreative2,setJrCreative3}) => {
    const JrCreativeCandidates=[
        {id:'JrCreativeCandidateOne',name:'Candidate One',},
        {id:'JrCreativeCandidateTwo',name:'Candidate Two',},
        {id:'JrCreativeCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCreative One</p>
            {
                JrCreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCreative2===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return;
                            }
                            if(JrCreative3===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return ;
                            }
                            setJrCreative1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCreative1 === candidate.name ? 'green' : 'white',
                                color: JrCreative1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCreative Two</p>
            {
                JrCreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCreative1===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return;
                            }
                            if(JrCreative3===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return ;
                            }
                            setJrCreative2(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCreative2 === candidate.name ? 'green' : 'white',
                                color: JrCreative2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>JrCreative Three</p>
            {
                JrCreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(JrCreative2===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return;
                            }
                            if(JrCreative1===candidate.name){
                                alert("You Already Selected This Candidate for JrCreative Post");
                                return ;
                            }
                            setJrCreative3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: JrCreative3 === candidate.name ? 'green' : 'white',
                                color: JrCreative3 === candidate.name ? 'white' : 'black',
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

export default CreativeJr