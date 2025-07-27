import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Drs from '../Nominations/DRs.jsx'
import Sports from '../Nominations/Sports.jsx'
import ThankYouPage from '../LoginPage/ThankYouPage.jsx'
import Culturals from '../Nominations/Culturals.jsx'
import Creatives from '../Nominations/Creative.jsx'
import TechLiteraryAlumni from '../Nominations/TechLiteraryAlumni.jsx'
import ExternalTreasurer from '../Nominations/ExternalTreasurer.jsx'

const Vote = () => {
    const [Done, setDone] = useState(false);
    const [DR1, setDR1] = useState("");
    const [DR2, setDR2] = useState("");
    const [ADR1, setADR1] = useState("");
    const [ADR2, setADR2] = useState("");
    const [Sports1, setSports1] = useState("");
    const [Sports2, setSports2] = useState("");
    const [Sports3, setSports3] = useState("");
    const [Cult1, setCult1] = useState("");
    const [Cult2, setCult2] = useState("");
    const [Cult3, setCult3] = useState("");
    const [Creative1, setCreative1] = useState("");
    const [Creative2, setCreative2] = useState("");
    const [Creative3, setCreative3] = useState("");
    const [Technical, setTechnical] = useState("");
    const [Alumni, setAlumni] = useState("");
    const [Treasurer, setTreasurer] = useState("");
    const [Literary, setLiterary] = useState("");
    const [External, setExternal] = useState("");
    useEffect(() => {
        function scroll() {
            window.scrollTo(0,0)
        }
        scroll();
    }, [])
    
    async function SubmitVoting() {
        const FullVote=[DR1,DR2,ADR1,ADR2,Sports1,Sports2,Sports3,Cult1,Cult2,Cult3,Creative1,Creative2,Creative3,Technical,Alumni,Treasurer,Literary,External];
        for(let i=0;i<18;i++){
            if(FullVote[i]==""){
                alert("please Vote for All Candidates");
                return;
            }
        }
        //SEND RESPONSE TO SERVER
        //5 SEC THANK YOU PAGE THEN 
        // LOCAL STORAGE CLEAR
        //REDIRECT TO HOME
        console.log(FullVote);
        setDone(true);
    }
    if(Done)return <ThankYouPage/>
  return (
    <div>
        <h1>Departmental Council Elections</h1>
        <Drs DR1={DR1} DR2={DR2} ADR1={ADR1} ADR2={ADR2} setDR1={setDR1} setDR2={setDR2} setADR1={setADR1} setADR2={setADR2}/>
        <Sports Sports1={Sports1} Sports2={Sports2} Sports3={Sports3} setSports1={setSports1} setSports2={setSports2} setSports3={setSports3}/>
        <Culturals Cult1={Cult1} Cult2={Cult2} Cult3={Cult3} setCult1={setCult1} setCult2={setCult2} setCult3={setCult3}/>
        <Creatives Creative1={Creative1} Creative2={Creative2} Creative3={Creative3} setCreative1={setCreative1} setCreative2={setCreative2} setCreative3={setCreative3}/>
        <TechLiteraryAlumni Technical={Technical} Literary={Literary} Alumni={Alumni} setTechnical={setTechnical} setLiterary={setLiterary} setAlumni={setAlumni}/>
        <ExternalTreasurer External={External} Treasurer={Treasurer} setExternal={setExternal} setTreasurer={setTreasurer}/>
        <button className='Submit' onClick={SubmitVoting} style={{
            minWidth:"280px" , width:"50%" , height:"35px" , fontFamily:"cursive" , cursor:"pointer" , backgroundColor:"green" ,border:"3px solid white" ,borderRadius:"20px"
        }}
        >SUBMIT</button>
    </div>
  )
}

export default Vote