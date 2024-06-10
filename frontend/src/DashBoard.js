import { faBookBookmark, faBookmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Navbar2 from "./Navbar2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import axios from 'axios'


function DashBoard() {
    const [user , setUser ]=useState(null)
    const [feed , setFeed] = useState([]);
    
    const handleDashboard = async()=>{
        try{
            const getUser= localStorage.getItem('loggedInUser')
            localStorage.setItem('loggedInUser' , getUser)
            setUser(getUser)
            const response = await axios.get(`http://localhost:3000/LogIn/${user._id}`)
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
    useEffect(()=>{
        handleDashboard()
    }, [])
    
    return (<>
        <Navbar2 />
        <div className="d-wrapper">
        
        <div className="ques-wrapper">
        <div className="flex ques" style={{ justifyContent: 'space-between' }}>
        <p className="ques-tag">23A</p>
        <p>Lorem wef ret uyuui oirf pod fuvk guk lob booooorr sjo...</p>
        <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} />
        </div>
        </div>
        </div>
        </>)
    }
    
    export default DashBoard