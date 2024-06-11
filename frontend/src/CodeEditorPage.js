import {useState} from 'react'
import Editor from '@monaco-editor/react'
import './CodeEditorPage.css'
const CodeEditor = ()=>{

    const [code , setCode]=useState("");
    const [input , setInput] = useState("");
    const [lang , setLang]=useState("cpp")

    

    return(<>
        <div className="CodeEditor-wrapper">
            <div className="lang-selector-wrapper">
                <button className="lang-btn" style={{background:lang==='java' ? "black":"white" , color:lang==='java' ? "white":"black"}} onClick={e=>{setLang('java')}}>Java</button>
                <button className="lang-btn" style={{background:lang==='python' ? "black":"white" , color:lang==='python' ? "white":"black"}} onClick={e=>{setLang('python')}}>Python</button>
                <button className="lang-btn" style={{background:lang==='cpp' ? "black":"white" , color:lang==='cpp' ? "white":"black"}} onClick={e=>{setLang('cpp')}}>C++</button>
            </div>
            <div className="code-space">
                <Editor 
                theme='vs-dark'
                height="70vh"
                width="60vw"
                defaultLanguage={lang}
                defaultValue=''
                onChange={e=>{
                    setCode(e)
                    console.log(code)
                }}/>
                <div className='input-wrapper' style={{width:"35vw" , height:"70vh"}}>
                        Inputs:
                        <textarea className='input-space' style={{width:"100%" , height:"90%" , backgroundColor:"black" , color:"white"}}/>
                </div>
            </div>
            <div className='result-btn-wrapper'>
                <button>Run & Compile</button>
            </div>
            <div className='terminal-box' style={{height:"20vh" , background:"#10100e"}}>
            
            </div>
        </div>
    </>)
}

export default CodeEditor