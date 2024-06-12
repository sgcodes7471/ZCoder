import { faBookBookmark, faBookmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Navbar2 from "./Navbar2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useId, useState } from "react"
import axios from 'axios'
import { useNavigate , useParams } from "react-router-dom"


function DashBoard() {
    const [feed , setFeed] = useState([]);
    const navigate=useNavigate()
    const params = useParams()
    const userId = params.id

    const handlePostBookmark = async(qid)=>{
        try{
            const response = await axios.post(`http://localhost:3000/LogIn/${userId}/${qid}/Bookmark`)
            const data = await response.json()
            if(data.error){
                throw new Error(data.message)
            }
        }catch(error){
            alert("Error in Bookmarking the question." , error.message);
        }
    }


    const handleDashboard = async()=>{
        try{
            const response = await axios.get(`http://localhost:3000/LogIn/${userId}`)
            const data= await response.json()
            if(!data.error){
                setFeed(data.topFeed)
            }else{
                alert('Failed to load the questions')
            }
        }catch(error){
            alert('Some Error Occured')
        }
    }
    // useEffect(()=>{
    //     handleDashboard()
    // },[])
    
    return (<>
        <Navbar2 />
        <div className="d-wrapper">
        
        <div className="ques-wrapper">
            {
                feed.map(item =>{
                    <div className="flex ques" style={{ justifyContent: 'space-between' , cursor:'pointer' }} onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>
                    <p className="ques-tag" style={{cursor:'pointer'}}>Ques</p>
                    <p style={{cursor:'pointer'}}>{item.headline}</p>
                    {/* <FontAwesomeIcon icon={faBookmark} style={{ zIndex:'2' ,color: '#90FF69', fontSize: '4vh' }} /> */}
                    </div>
                })
            }


            {/* /this below is just demo */}
       <div className="flex ques" style={{ justifyContent: 'space-between' }} onClick={()=>{navigate(`/LogIn/4567/1234`)}}>
                    <p className="ques-tag">Ques</p>
                    <p>knsdkewcv pwoivn 3r nepi fdvijwdfvpoidj kn opwiejfdipevo opwejfn jvir jfiowefhweoibjdv uiowehfoweu</p>
                    {/* <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} /> */}
                    </div>
        </div>
        </div>
        </>)
    }
    
    export default DashBoard