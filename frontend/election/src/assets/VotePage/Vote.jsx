import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Drs from '../Nominations/DRs.jsx'
import Sports from '../Nominations/Sports.jsx'
import ThankYouPage from '../LoginPage/ThankYouPage.jsx'
import Culturals from '../Nominations/Culturals.jsx'
import Creatives from '../Nominations/Creative.jsx'
import TechLiteraryAlumni from '../Nominations/TechLiteraryAlumni.jsx'
import ExternalTreasurer from '../Nominations/ExternalTreasurer.jsx'
import axios from 'axios'

const Vote = () => {
    const navigate=useNavigate();
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
        const FullVotes=[DR1,DR2,ADR1,ADR2,Sports1,Sports2,Sports3,Cult1,Cult2,Cult3,Creative1,Creative2,Creative3,Technical,Alumni,Treasurer,Literary,External];
        for(let i=0;i<18;i++){
            if(FullVotes[i]==""){
                alert("please Vote for All Candidates");
                return;
            }
        }
        const token=localStorage.getItem("token");
        const email=localStorage.getItem("email");
        const backendUrl=import.meta.env.VITE_APP_URL;
        axios.post(`${backendUrl}api/vote/seniors`,{
            "email":`${email}`,
            "rollNo":`${email.substring(7,10)}`,
            "dr":`${FullVotes[0]}`,
            "ldr":`${FullVotes[1]}`,
            "adrA":`${FullVotes[2]}`,
            "adrB":`${FullVotes[3]}`,
            "sportsBoysOne":`${FullVotes[4]}`,
            "sportsBoysTwo":`${FullVotes[5]}`,
            "sportsGirl":`${FullVotes[6]}`,
            "culturalOne":`${FullVotes[7]}`,
            "culturalTwo":`${FullVotes[8]}`,
            "culturalThree":`${FullVotes[9]}`,
            "creativeOne":`${FullVotes[10]}`,
            "creativeTwo":`${FullVotes[11]}`,
            "creativeThree":`${FullVotes[12]}`,
            "technical":`${FullVotes[13]}`,
            "literary":`${FullVotes[16]}`,
            "alumni":`${FullVotes[14]}`,
            "external":`${FullVotes[17]}`,
            "treasurer":`${FullVotes[15]}`
        },{params:{token:token}}).then(response=>{
            console.log(response.data);
            navigate("/ThankYou");
        }).catch(error=>{
            alert(error);
        });
        console.log(FullVotes);
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