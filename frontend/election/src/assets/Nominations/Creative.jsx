import React from 'react'
import "./Nominations.css"

const Creative = ({Creative1,Creative2,Creative3,setCreative1,setCreative2,setCreative3}) => {
    const CreativeCandidates=[
        {id:'CreativeCandidateOne',name:'Candidate One',},
        {id:'CreativeCandidateTwo',name:'Candidate Two',},
        {id:'CreativeCandidateThree',name:'Candidate Three',}
    ]
  return (
    <>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Creative One</p>
            {
                CreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Creative2===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return;
                            }
                            if(Creative3===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return ;
                            }
                            setCreative1(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Creative1 === candidate.name ? 'green' : 'white',
                                color: Creative1 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Creative Two</p>
            {
                CreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Creative1===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return;
                            }
                            if(Creative3===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return ;
                            }
                            setCreative2(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Creative2 === candidate.name ? 'green' : 'white',
                                color: Creative2 === candidate.name ? 'white' : 'black',
                                cursor:'pointer'
                            }}
                        >VOTE</button>
                    </div>)
                })
            }
    </div>
    <div className='PostContainer'>
            <p style={{color:"rgb(1, 244, 248)",fontSize:"24px"}}>Creative Three</p>
            {
                CreativeCandidates.map((candidate)=>{
                    return (<div key={candidate.id} className='Candidate'>
                        <p className='CandidateName'>{candidate.name}</p>
                        <button onClick={(e)=>{
                            if(Creative2===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return;
                            }
                            if(Creative1===candidate.name){
                                alert("You Already Selected This Candidate for Creative Post");
                                return ;
                            }
                            setCreative3(candidate.name)
                        }} 
                            style={{
                                backgroundColor: Creative3 === candidate.name ? 'green' : 'white',
                                color: Creative3 === candidate.name ? 'white' : 'black',
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

export default Creative