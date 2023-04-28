import React from 'react'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { TfiMenu } from "react-icons/tfi";


const Chat = ({setIsMobile}) => {

  const {data} = useContext(ChatContext)

  
  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className='chatInfoWrap'>
     
{      data.user.photoURL && <img src={data.user.photoURL} alt="" />}        
<span>{data.user.displayName}</span>

</div>
    
        <div onClick={() => setIsMobile(prevState => !prevState)} className='isMobileHandler'><TfiMenu/></div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat