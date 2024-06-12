import {  faBookmark, faCheck } from "@fortawesome/free-solid-svg-icons"
import Navbar2 from "./Navbar2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";


const Profile = () => {
    const [user  , setUser] = useState({
        "username":"demo","techStack":"" , "language":"", "ratingLeetCode":"", "ratingCodeForces":"","ratingCodeChef":"" , "verfied":false});
        const [publish , setPublish] = useState([])
        const [bookmark , setBookmark] = useState([])
        const navigate = useNavigate()
        const params = useParams()
        const userId = params.id
        
        const handleGetUser = async()=>{
            try{
                const response = await axios.get(`http://localhost:3000/LogIn/${userId}/Profile`)
                const data = await response.json()
                if(data.error){
                    throw new Error(data.message)
                }
                setUser(data.user)
                setPublish(data.publish)
                setBookmark(data.bookmark)
            }catch(error){
                alert("Error in fetching the user!" , error.message)
                navigate(-1);
            }
        }
        useEffect(()=>{
                // handleGetUser()
        },[])
        
        
        const handleDelQuestion = async(qid)=>{
            try{
                const response = await axios.delete(`http://localhost:3000/${userId}/${qid}/Del-Question`)
                const data = await response.json()
                if(data.error){
                    throw new Error(data.message)
                }
                alert(data.message)
                handleGetUser()
            }catch(error){
                alert('Error Occured in deleting\n' ,error.message)
            }
        }
        
        
        const handlePostBookmark = async(qid)=>{
            try{
                const response = await axios.post(`http://localhost:3000/LogIn/${userId}/${qid}/Bookmark`)
                const data = await response.json()
                if(data.error){
                    throw new Error(data.message)
                }
                alert(data.message)
                handleGetUser()
            }catch(error){
                alert("Error in Bookmarking the question." , error.message);
            }
        }
        
        
        return (  
            
            <><Navbar2 />
            
            <div className="d-wrapper">
            <div className="flex" style={{ gap:'5vw', justifyContent:'flex-start'}}>
            <img src="" style={{height: '30vh' , width: '30vh' , border: '2px solid black', borderRadius: '15vh'}}/>
            <div>
            <h4>Username:{user.username}
            {user.verfied?(<div style={{backgroundColor:'green' , width:'25px', height:'25px' , textAlign:'center' ,  margin:'0px 4px', borderRadius:'1000px' , display:'inline-block'}}>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'white', fontSize: '15px' }} /></div>):('')}</h4>
                <h4>Preferred Tech Stack:{user.techStack}</h4>
                <h4>Preferred Programming Language:{user.language}</h4>
                <h4>Rating on platforms: 
                <div> 
                <h5>Leetcode-{user.ratingLeetCode}</h5>
                <h5>Codeforces-{user.ratingCodeForces}</h5>
                <h5>Codechef-{user.ratingCodeChef}</h5>
                </div>
                </h4>
                <div style={{cursor:"pointer" , color:'red'}} >   <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '2vh' }} onClick={()=>{navigate('AccEdit')}}/> Edit Your Account</div>
                </div>
                </div>
                
                <div className="flex" style={{ gap:'2vw', justifyContent:'flex-start'}}>
                <div className="ques-wrapper" id="publish-qs" style={{ width:'45vw'}}>
                
                {
                    bookmark.map(item =>{
                        <div className="flex ques" style={{ justifyContent: 'space-between' , cursor:'pointer' }} >
                        <p className="ques-tag" onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>Ques</p>
                        <p style={{cursor:'pointer'}} onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>{item.headline}</p>
                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} onClick={()=>{
                            const testPrompt = prompt('Enter yes to remove bookmark')
                            if(testPrompt === 'yes'){
                                handlePostBookmark()}}
                            }/>
                            </div>
                        })
                    }
                    
                    {/* this is demo */}
                    {/* <div className="flex ques" style={{ justifyContent: 'space-between' }} >
                        <p className="ques-tag" onClick={()=>{navigate(`/LogIn/123456/12345`)}}>Ques</p>
                        <p style={{cursor:'pointer'}} onClick={()=>{navigate(`/LogIn/123456/12345`)}}>Lorem wef ret uyuui oirf pod fuvk guk lob booooorr sjo...</p>
                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} onClick={()=>{const testPrompt = prompt('Enter yes to remove bookmark')
                        if(testPrompt === 'yes'){
                        handlePostBookmark(12345)}}
                        }/>
                        </div> */}
                        </div>
                        
                        <div className="ques-wrapper" id="bookmark-qs" style={{ width:'45vw'}}>
                        
                        {
                            publish.map(item =>{
                                <div className="flex ques" style={{ justifyContent: 'space-between' , cursor:'pointer' }}>
                                <p className="ques-tag" onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>Ques</p>
                                <p style={{cursor:'pointer'}} onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>{item.headline}</p>
                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '4vh' }} onClick={()=>{
                                    const testPrompt = prompt('Enter yes to remove bookmark')
                                    if(testPrompt === 'yes'){
                                        handleDelQuestion(item._id)}}
                                    }/>
                                    </div>
                                })
                            }
                            
                            
                            {/* this is demo */}
                            {/* <div className="flex ques" style={{ justifyContent: 'space-between' }} >
                                <p className="ques-tag" onClick={()=>{navigate(`/LogIn/123456/1234`)}}>Ques</p>
                                <p style={{cursor:'pointer'}} onClick={()=>{navigate(`/LogIn/123456/1234`)}}>Lorem wef ret uyuui oirf pod fuvk guk lob booooorr sjo...</p>
                                
                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '4vh' }} onClick={()=>{const testPrompt = prompt('Enter yes to remove bookmark')
                                if(testPrompt === 'yes'){
                                handleDelQuestion(12345)}}
                                }/>
                                </div> */}
                                </div>
                                
                                </div>
                                
                                <div className="verify-Email-btn" style={{position:'fixed' , bottom:'30px' , right:'30px'}}>
                                {(!user.verfied)?(<button style={{backgroundColor:'#4345E7' , color:'white' , border:'none' , borderRadius:'5px' , fontSize:'1.2rem' , padding:'10px'}}
                                    onClick={()=>{navigate('AccVerify')}}>Verfiy Email</button>):('')}
                                    </div>
                                    </div>
                                    </>
                                );
                            }
                            
                            export default Profile;