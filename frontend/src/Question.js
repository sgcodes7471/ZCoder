import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faBookmark, faCheck, faMagnifyingGlass, faTrash, faPenToSquare, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { Editor } from "@monaco-editor/react";




const Question = () => {

    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setSelectedPlatform(event.target.value);
    };

    const [code, setCode] = useState("");
    const [lang, setLang] = useState("cpp")

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
                <div className="search-results" style={{backgroundColor:'black'}}>
                        <div className="lang-selector-wrapper">
                            <button className="lang-btn" style={{ background: lang === 'java' ? "black" : "white", color: lang === 'java' ? "white" : "black" }} onClick={e => { setLang('java') }}>Java</button>
                            <button className="lang-btn" style={{ background: lang === 'python' ? "black" : "white", color: lang === 'python' ? "white" : "black" }} onClick={e => { setLang('python') }}>Python</button>
                            <button className="lang-btn" style={{ background: lang === 'cpp' ? "black" : "white", color: lang === 'cpp' ? "white" : "black" }} onClick={e => { setLang('cpp') }}>C++</button>
                        </div>
                        <Editor
                            theme='vs-dark'
                            defaultLanguage={lang}
                            defaultValue=''
                            onChange={e => {
                                setCode(e)
                                console.log(code)
                            }} />
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