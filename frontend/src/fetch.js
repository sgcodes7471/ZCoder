import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@monaco-editor/react";



const Fetch = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setSelectedPlatform(event.target.value);
    };

    const [code, setCode] = useState("");
    const [lang, setLang] = useState("cpp")

    return (<>
        <div className='body-wrapper'>

            <Navbar2 />

            <div style={{ width: '95vw' }}>
                <form className="flex2" style={{ alignItems: 'flex-start', rowGap: '2vh' }} onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                <input type="text" placeholder="Question Headline" style={{ width:'93vw', fontSize: '3.5vh',color:'#FF786B' }}></input>
                    <div className="flex">
                        
                        <p style={{ fontSize: '2.7vh' }}>Visibility:</p>
                        <div className="flex">
                            <input
                                type="radio"
                                name="platform"
                                value="Private"
                                checked={selectedPlatform === 'Private'}
                                onChange={handleChange}
                                style={{ height: '3vh', width: '2vw' }}
                            />
                            <label htmlFor="Private">Private</label>
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="platform"
                                value="Public"
                                checked={selectedPlatform === 'Public'}
                                onChange={handleChange}
                                style={{ height: '3vh', width: '2vw' }}
                            />
                            <label htmlFor="Public">Public</label>
                        </div>
                    </div>
                    <textarea placeholder="Question Statement" style={{ width: '93vw', height: '20vh',border: 'none', borderRadius: '2vh',padding:'2vh' }}></textarea>

                    <div className="search-results" style={{backgroundColor:'black'}}>
                        <div className="lang-selector-wrapper">
                            <button className="lang-btn" style={{ background: lang === 'java' ? "black" : "white", color: lang === 'java' ? "white" : "black" }} onClick={e => { setLang('java') }}>Java</button>
                            <button className="lang-btn" style={{ background: lang === 'python' ? "black" : "white", color: lang === 'python' ? "white" : "black" }} onClick={e => { setLang('python') }}>Python</button>
                            <button className="lang-btn" style={{ background: lang === 'cpp' ? "black" : "white", color: lang === 'cpp' ? "white" : "black" }} onClick={e => { setLang('cpp') }}>C++</button>
                        </div>
                        <Editor
                        height='30vh'
                            theme='vs-dark'
                            defaultLanguage={lang}
                            defaultValue=''
                            onChange={e => {
                                setCode(e)
                                console.log(code)
                            }} />
                    </div>
                    <input className='login-submit' style={{ width: '15vw', backgroundColor:"rgb(150 ,150 ,150a)"}} type='submit' value="Publish Question"  />
                </form>
            </div>
        </div>
    </>
    );
}
export default Fetch;