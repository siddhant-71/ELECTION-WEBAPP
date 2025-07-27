import React, { useState } from 'react'
import SportsJr from '../NominationsJr/SportsJr.jsx';
import CulturalsJr from '../NominationsJr/CulturalsJr.jsx';
import CreativeJr from '../NominationsJr/CreativeJr';
import TechLiteraryAlumniJr from '../NominationsJr/TechLiteraryAlumniJr.jsx';
import ExternalTreasurerJr from '../NominationsJr/ExternalTreasurerJr.jsx';
import Crs from '../NominationsJr/CRs.jsx';
import ThankYouPage from '../LoginPage/ThankYouPage.jsx';



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
    function SubmitVoting(){
        const FullVote=[JrDR1,JrDR2,JrADR1,JrADR2,JrSports1,JrSports2,JrSports3,JrCult1,JrCult2,JrCult3,JrCreative1,JrCreative2,JrCreative3,JrTechnical,JrAlumni,JrTreasurer,JrLiterary,JrExternal];
        for(let i=0;i<18;i++){
            if(FullVote[i]==""){
                //alert("please Vote for All Candidates");
                //return;
            }
        }
        //SEND RESPONSE TO SERVER
        setSecondYear(false);
        setdepartmental(true);
        console.log(FullVote);
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