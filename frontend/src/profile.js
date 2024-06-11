import { faBookBookmark, faBookmark, faCheck, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Navbar2 from "./Navbar2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";


const Profile = () => {
    const [user  , setUser] = useState({
        "username":"","techStack":"demo" , "language":"", "ratingLeetCode":"", "ratingCodeForces":"","ratingCodeChef":""
    });
    const [publish , setPublish] = useState([])
    const [bookmark , setBookmark] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const userId = params.id
    const handleGetUser = async()=>{
        try{
            const response = await axios.get(`http://localhost:3000/LogIn/${user}/Profile`)
            const data = await response.json()
            if(data.error){
                throw new Error
            }
            setUser(data.user)
            setPublish(data.publish)
            setBookmark(data.bookmark)
        }catch(error){
            alert("Error in fetching the user!")
            navigate(-1);
        }
    }
    useEffect(()=>{

    },[])
    return (  
        
        <><Navbar2 />
        <div className="d-wrapper">
            <div className="flex" style={{ gap:'5vw', justifyContent:'flex-start'}}>
                <img src="" style={{height: '30vh' , width: '30vh' , border: '2px solid black', borderRadius: '15vh'}}/>
                <div>
                    <h4>Username:{user.username}</h4>
                    <h4>Preferred Tech Stack:{user.techStack}</h4>
                    <h4>Preferred Programming Language:{user.language}</h4>
                    <h4>Rating on platforms: 
                        <div> 
                            <h5>Leetcode-{user.ratingLeetCode}</h5>
                            <h5>Codeforces-{user.ratingCodeForces}</h5>
                            <h5>COdechef-{user.ratingCodeChef}</h5>
                        </div>
                    </h4>
                </div>
            </div>

            <div className="flex" style={{ gap:'2vw', justifyContent:'flex-start'}}>
            <div className="ques-wrapper" id="publish-qs" style={{ width:'45vw'}}>

            {
                publish.map(item =>{
                    <div className="flex ques" style={{ justifyContent: 'space-between' , cursor:'pointer' }} onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>
                    <p className="ques-tag">Ques</p>
                    <p>{item.headline}</p>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} />
                    </div>
                })
            }

            {/* this is demo */}
                <div className="flex ques" style={{ justifyContent: 'space-between' }} onClick={()=>{navigate(`/LogIn/4567/1234`)}}>
                    <p className="ques-tag">Ques</p>
                    <p>Lorem wef ret uyuui oirf pod fuvk guk lob booooorr sjo...</p>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: '#90FF69', fontSize: '4vh' }} />
                </div>
            </div>
            
            <div className="ques-wrapper" id="bookmark-qs" style={{ width:'45vw'}}>

            {
                bookmark.map(item =>{
                    <div className="flex ques" style={{ justifyContent: 'space-between' , cursor:'pointer' }} onClick={()=>{navigate(`/LogIn/${userId}/${item._id}`)}}>
                    <p className="ques-tag">Ques</p>
                    <p>{item.headline}</p>
                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '4vh' }} />
                    </div>
                })
            }


{/* this is demo */}
                <div className="flex ques" style={{ justifyContent: 'space-between' }} onClick={()=>{navigate(`/LogIn/4567/1234`)}}>
                    <p className="ques-tag">Ques</p>
                    <p>Lorem wef ret uyuui oirf pod fuvk guk lob booooorr sjo...</p>
                    {/* removing this check icon kyuki edit nahi hai abhi keliye */}
                    {/* <FontAwesomeIcon icon={faCheck} style={{ color: 'black', fontSize: '4vh' }} /> */}
                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '4vh' }} />
                    
                </div>
            </div>

            </div>
        </div>
        </>
    );
}

export default Profile;