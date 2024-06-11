import Navbar2 from "./Navbar2";
import { Link , useNavigate , useParams} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faBookmark, faCheck, faMagnifyingGlass, faTrash, faPenToSquare, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { Editor } from "@monaco-editor/react";




const Question = () => {

    const navigate = useNavigate()
    // const [username, setUsername] = useState('username');
    //no need of extra username,.... fetch hoga backend se
    const [question , setQuestion] = useState({'headline':"Question Headline", 'name':"username" , "statement":"Question Statement", "code":"demo code annd mand ka tola" , "upvote":99})
    const [idUpVoted , setIsUpVoted]= useState(false)
    const [idBookmarked , setIsBookmarked]= useState(false)
    //these two will be fetched from backend

    //no need of selected platfomr
    // const handleChange = (event) => {
    //     setSelectedPlatform(event.target.value);
    // };

    const [code, setCode] = useState("");
    const [lang, setLang] = useState("cpp")

    return (
        <div className='body-wrapper'>

            <Navbar2 />
            <div className="flex" style={{ justifyContent: 'space-between', width: '94vw' }}>
                <p>{question.name}</p>
                <div className="flex" style={{ gap: '1vw' }}>
                    {/* question View mein delete nahi hoga .... bas profile ke waha par hi delete ha option hoga */}
                    {/* <FontAwesomeIcon icon={faTrash} style={{ fontSize: '2vh' }} /> */}
                    {/* <FontAwesomeIcon icon={faCheck} style={{ fontSize: '2vh' }} /> */}
                    {/* no seen of editing for now*/}
                    {/* <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '2vh' }} /> */}
                </div>
            </div>
            <div className="flex2" style={{ width: '95vw', alignItems: 'flex-start', rowGap: '2vh' }}>
                <p class="heading" style={{ fontSize: '4vh' }}>{question.headline}</p>
                {/* purposely changed the height of this container to max-content to save space */}
                <div className="search-results">
                    <p>{question.statement}</p>
                </div>
                <div className="code-result-wrapper" style={{height:'max-content', width:'92vw', borderRadius:'2vh' , padding:'3vh' , backgroundColor:"rgb(20 , 0,20)" , color:'white'}}>{question.code}</div>
                {/* we do not need an editor over here... only the code fetched from the backend will displayed here... code will not be written */}
                

            </div>
            <div className="flex" style={{ justifyContent: 'space-between', width: '94vw', height: '7vh' }}>
                <div className="flex" style={{ gap: '1vw' }}>
                    <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '3vh' }} />123
                    <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '3vh' }} />{question.upvote}
                </div>
                <div className="flex" style={{ gap: '1vw' }}>
                    <button style={{backgroundColor:'rgb(100 , 100 , 100)' , color:'white'}} className="comment-btn" onClick={()=>{navigate(`Comments`)}}>See Comments</button>
                    {/* <button className="comment-btn">Add Comment</button> */}
                </div>
            </div>
        </div>
    );
}

export default Question;