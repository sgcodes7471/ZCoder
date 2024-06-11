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

    const handleDashboard = async()=>{
        try{
            // const getUser= localStorage.getItem('loggedInUser')
            // localStorage.setItem('loggedInUser' , getUser)
            // setUser(getUser)
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
                    <p className="ques-tag">Ques</p>
                    <p>{item.headline}</p>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} />
                    </div>
                })
            }


            {/* /this below is just demo */}
       <div className="flex ques" style={{ justifyContent: 'space-between' }}>
                    <p className="ques-tag">Ques</p>
                    <p>knsdkewcv pwoivn 3r nepi fdvijwdfvpoidj kn opwiejfdipevo opwejfn jvir jfiowefhweoibjdv uiowehfoweu</p>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} />
                    </div>
        </div>
        </div>
        </>)
    }
    
    export default DashBoard