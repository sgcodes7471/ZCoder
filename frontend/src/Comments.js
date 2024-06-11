import Navbar2 from "./Navbar2";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots , faPaperPlane} from "@fortawesome/free-solid-svg-icons";


const Comments = () => {

    const [comment, setComment] = useState("");

    return (
        <>
            <Navbar2 />
            <div className="body-wrapper" style={{ alignItems: 'flex-start', paddingLeft: '4vh' }}>

                <p class="heading" style={{ fontSize: '4vh' }}>Question Headline</p>
                <div className="comment-wrapper">
                    <div className="comment">
                        <p>Comment1</p>
                    </div>
                    <div className="flex" style={{ fontSize: '2vh', paddingLeft: '0.5vw', width: '2.5vw', justifyContent: 'space-around' }}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>3</p>
                    </div>
                    <div className="comment">
                        <p>Comment2-Longer Comment</p>
                    </div>
                    <div className="flex" style={{ fontSize: '2vh', paddingLeft: '0.5vw', width: '2.5vw', justifyContent: 'space-around' }}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>3</p>
                    </div>
                </div>
                <div className="comment-footer flex" style={{ gap: '1vw' }}>
                    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '3vh' }} />
                    <form className="flex" style={{ gap: '1vw' }}>
                        <input type="text" placeholder="Type in your comment..." style={{ width: '85vw', fontSize: '2vh', height: '2vh' }} onChange={(e) => setComment(e.target.value)}></input>
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