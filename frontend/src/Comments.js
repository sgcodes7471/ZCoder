import Navbar2 from "./Navbar2";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots , faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [headline, setHeadline] = useState("");
    const params = useParams();
    const userId = params.id;
    const questionId = params.qid;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/LogIn/${userId}/${questionId}/Comments`);
            const responseData = await response.json(); 
            setComments(responseData.data.comments);
            setHeadline(responseData.data.headline);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleUpVote = async (cid) => {
        try {
            await axios.post(`http://localhost:3000/LogIn/${userId}/${questionId}/Comment/${cid}/Comment-UpVote`);
            fetchData(); 
        } catch (error) {
            console.error("Error upvoting comment:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/LogIn/${userId}/${questionId}/Comment`, { comment });
            fetchData(); 
            setComment("");
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    return (
        <>
            <Navbar2 />
            <div className="body-wrapper" style={{ alignItems: 'flex-start', paddingLeft: '4vh' }}>
                <p className="heading" style={{ fontSize: '4vh' }}>{headline}</p>
                <div className="comment-wrapper">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <p>{comment.text}</p>
                            <div className="flex" style={{ fontSize: '2vh', paddingLeft: '0.5vw', width: '2.5vw', justifyContent: 'space-around' }}>
                                <p>{comment.username}</p>
                                <FontAwesomeIcon icon={faThumbsUp} onClick={() => handleUpVote(comment._id)} style={{ cursor: 'pointer' }} />
                                <p>{comment.upvote}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="comment-footer flex" style={{ gap: '1vw' }}>
                    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '3vh' }} />
                    <form className="flex" style={{ gap: '1vw' }} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Type in your comment..." style={{ width: '85vw', fontSize: '2vh', height: '2vh' }} value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button type="submit" style={{ width: '2vw', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '3vh' }} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Comments;
