import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faBookmark, faCheck, faMagnifyingGlass, faTrash, faPenToSquare, faThumbsUp } from "@fortawesome/free-solid-svg-icons"

const Question = () => {

    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setSelectedPlatform(event.target.value);
    };
    return (
        <div className='body-wrapper'>

            <Navbar2 />
            <div className="flex" style={{ justifyContent: 'space-between', width: '94vw' }}>
                <p>username</p>
                <div className="flex" style={{ gap: '1vw' }}>
                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '2vh' }} />
                    <FontAwesomeIcon icon={faCheck} style={{ fontSize: '2vh' }} />
                    <FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: '2vh' }} />
                </div>
            </div>
            <div className="flex2" style={{ width: '95vw', alignItems: 'flex-start', rowGap: '2vh' }}>
                <p class="heading" style={{ fontSize: '4vh' }}>Question Headline</p>
                <div className="search-results">
                    <p>Question Statement</p>
                </div>
                <div className="search-results">
                    <p>Code Solution</p>
                </div>

            </div>
            <div className="flex" style={{ justifyContent: 'space-between', width: '94vw', height: '7vh' }}>
                <div className="flex" style={{ gap: '1vw' }}>
                    <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '3vh' }} />
                    <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '3vh' }} />
                </div>
                <div className="flex" style={{ gap: '1vw' }}>
                    <button className="comment-btn">See Comments</button>
                    <button className="comment-btn">Add Comment</button>
                </div>
            </div>
        </div>
    );
}

export default Question;