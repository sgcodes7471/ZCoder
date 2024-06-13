import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar2 from './Navbar2';
import './ChatRoomPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

const socket = io('http://localhost:5000'); 

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [errorCase , setErrorCase] = useState('')
  const params = useParams()
  const userid = params.id
  
  useEffect(() => {
    socket.on('message', (message) => {
      setChat([...chat, message]);
    });
    // Clean up on component unmount
    return () => {
      socket.off('message');
    };
  }, []);
  
  const sendMessage = () => {
    if (message.trim()!=='') {
      const msg = {
        userId: userid,
        message: message.trim(),
      };
      socket.emit('message', msg);
      setMessage('');
    }else{
      
    }
  };
  
  return (
    <>
    <Navbar2/>
    <div className="chat-outer-wraperr">
    <div className="chat-wrapper">
    {chat.map(message => (
      <div className={message.userId === 'system' ? 'system-msg' : 'user-msg'}>
      <strong>{message.userId === 'system' ? 'System' : message.userId}</strong>: {message.message}
      </div>
    ))}
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault()
      sendMessage()
    }} style={{display:'flex' , margin:'3px 20px', backgroundColor:'white' ,border: '2px solid #FF786B' , borderRadius:'100px'}}>
    <input type="text" style={{borderRadius:'100px' , padding: '10px' , width:'100% '}} placeholder="Send a message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
    <button style={{padding:'10px 20px' , border:'none' , color:'white' , backgroundColor:'#FF786B' , cursor:'pointer' , borderRadius:'1000px' , zIndex:'2'}} type="submit">
    <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '3vh' , color:'white'}} />
    </button>
    </form>
    </div>
    </>
  );
};

export default ChatRoom;