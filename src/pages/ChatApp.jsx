import { useState } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'



const ChatApp = () => {

  const [isMobile, setIsMobile]= useState(false)

  return (
    <div className="chatWrapper">
        <div className="container">
            <Sidebar setIsMobile={setIsMobile} isMobile={isMobile} />
            <Chat setIsMobile={setIsMobile}/>
        </div>
    </div>
  )
}

export default ChatApp