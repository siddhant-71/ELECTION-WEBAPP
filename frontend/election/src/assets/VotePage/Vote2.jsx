import React, { useState } from 'react'
import SportsJr from '../NominationsJr/SportsJr.jsx';
import CulturalsJr from '../NominationsJr/CulturalsJr.jsx';
import CreativeJr from '../NominationsJr/CreativeJr';
import TechLiteraryAlumniJr from '../NominationsJr/TechLiteraryAlumniJr.jsx';
import ExternalTreasurerJr from '../NominationsJr/ExternalTreasurerJr.jsx';
import Crs from '../NominationsJr/CRs.jsx';
import ThankYouPage from '../LoginPage/ThankYouPage.jsx';
import axios from 'axios';



const Vote2 = ({setSecondYear,setdepartmental}) => {
    const [JrDR1, setJrDR1] = useState("");
    const [JrDR2, setJrDR2] = useState("");
    const [JrADR1, setJrADR1] = useState("");
    const [JrADR2, setJrADR2] = useState("");
    const [JrSports1, setJrSports1] = useState("");
    const [JrSports2, setJrSports2] = useState("");
    const [JrSports3, setJrSports3] = useState("");
    const [JrCult1, setJrCult1] = useState("");
    const [JrCult2, setJrCult2] = useState("");
    const [JrCult3, setJrCult3] = useState("");
    const [JrCreative1, setJrCreative1] = useState("");
    const [JrCreative2, setJrCreative2] = useState("");
    const [JrCreative3, setJrCreative3] = useState("");
    const [JrTechnical, setJrTechnical] = useState("");
    const [JrAlumni, setJrAlumni] = useState("");
    const [JrTreasurer, setJrTreasurer] = useState("");
    const [JrLiterary, setJrLiterary] = useState("");
    const [JrExternal, setJrExternal] = useState("");
    async function SubmitVoting(){
        const FullVote=[JrDR1,JrDR2,JrADR1,JrADR2,JrSports1,JrSports2,JrSports3,JrCult1,JrCult2,JrCult3,JrCreative1,JrCreative2,JrCreative3,JrTechnical,JrAlumni,JrTreasurer,JrLiterary,JrExternal];
        const email=localStorage.getItem("email");
        for(let i=0;i<18;i++){
            if(FullVote[i]==""){
               alert("please Vote for All Candidates");
               return;
            }
        }
        // const secondYearDTO ={
        // "email":`${email}`,
        // "rollNo":`${email.substring(7,10)}`,
        // "CR":`${FullVote[0]}`,
        // "LR":`${FullVote[1]}`,
        // "AcrA":`${FullVote[2]}`,
        // "AcrB":`${FullVote[3]}`,
        // "SportsBoysOne":`${FullVote[4]}`,
        // "SportsBoysTwo":`${FullVote[5]}`,
        // "SportsGirl":`${FullVote[6]}`,
        // "CulturalOne":`${FullVote[7]}`,
        // "CulturalTwo":`${FullVote[8]}`,
        // "CulturalThree":`${FullVote[9]}`,
        // "CreativeOne":`${FullVote[10]}`,
        // "CreativeTwo":`${FullVote[11]}`,
        // "CreativeThree":`${FullVote[12]}`,
        // "Technical":`${FullVote[13]}`,
        // "Literary":`${FullVote[16]}`,
        // "Alumni":`${FullVote[14]}`,
        // "External":`${FullVote[17]}`,
        // "Treasurer":`${FullVote[15]}`
        // }
        
        const token=localStorage.getItem("token");
        axios.post("http://localhost:8080/api/vote/juniors",{
            "email":`${email}`,
            "rollNo":`${email.substring(7,10)}`,
            "cr":`${FullVote[0]}`,
            "lr":`${FullVote[1]}`,
            "acrA":`${FullVote[2]}`,
            "acrB":`${FullVote[3]}`,
            "sportsBoysOne":`${FullVote[4]}`,
            "sportsBoysTwo":`${FullVote[5]}`,
            "sportsGirl":`${FullVote[6]}`,
            "culturalOne":`${FullVote[7]}`,
            "culturalTwo":`${FullVote[8]}`,
            "culturalThree":`${FullVote[9]}`,
            "creativeOne":`${FullVote[10]}`,
            "creativeTwo":`${FullVote[11]}`,
            "creativeThree":`${FullVote[12]}`,
            "technical":`${FullVote[13]}`,
            "literary":`${FullVote[16]}`,
            "alumni":`${FullVote[14]}`,
            "external":`${FullVote[17]}`,
            "treasurer":`${FullVote[15]}`
        },{params:{token:token}}).then(response=>{
            console.log(response.data);
            setSecondYear(false);
            setdepartmental(true);
        }).catch(error=>{
            alert(error.response.data);
        });
    }
  return (
    <div>
        <h1 style={{
            color:"whitesmoke"
        }}>Departmental Council Elections</h1>
        <Crs JrDR1={JrDR1} JrDR2={JrDR2} JrADR1={JrADR1} JrADR2={JrADR2} setJrDR1={setJrDR1} setJrDR2={setJrDR2} setJrADR1={setJrADR1} setJrADR2={setJrADR2}/>
        <SportsJr JrSports1={JrSports1} JrSports2={JrSports2} JrSports3={JrSports3} setJrSports1={setJrSports1} setJrSports2={setJrSports2} setJrSports3={setJrSports3}/>
        <CulturalsJr JrCult1={JrCult1} JrCult2={JrCult2} JrCult3={JrCult3} setJrCult1={setJrCult1} setJrCult2={setJrCult2} setJrCult3={setJrCult3}/>
        <CreativeJr JrCreative1={JrCreative1} JrCreative2={JrCreative2} JrCreative3={JrCreative3} setJrCreative1={setJrCreative1} setJrCreative2={setJrCreative2} setJrCreative3={setJrCreative3}/>
        <TechLiteraryAlumniJr JrTechnical={JrTechnical} JrLiterary={JrLiterary} JrAlumni={JrAlumni} setJrTechnical={setJrTechnical} setJrLiterary={setJrLiterary} setJrAlumni={setJrAlumni}/>
        <ExternalTreasurerJr JrExternal={JrExternal} JrTreasurer={JrTreasurer} setJrExternal={setJrExternal} setJrTreasurer={setJrTreasurer}/>
        <button className='Submit' onClick={SubmitVoting} style={{
            minWidth:"280px" , width:"50%" , height:"35px" , fontFamily:"cursive" , cursor:"pointer" , backgroundColor:"green" ,border:"3px solid white" ,borderRadius:"20px"
        }}
        >SUBMIT</button>
    </div>
  )
}

export default Vote2