import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { ChatContext } from '../context/ChatContext'

const Chats = ({setIsMobile}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [chats, setChats] = useState([]) 
    const {currentUser} = useContext(AuthContext)
    const {dispatch} = useContext(ChatContext)


    useEffect(()=> {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
    
            return () => {
                unsub()
            }
        }
        currentUser.uid && getChats()
      
    },[currentUser.uid])

    const updateDimensions = () => {
        setWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener("resize", updateDimensions);
      }, [window]);

    const handleSelect = (user) => {
        dispatch({type:"CHANGE_USER", payload:user })
    }

  return (
    <div  onClick={width < 568 ? () => setIsMobile(prevState => !prevState) : null } className='chats'>
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
            <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
            <img   src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Chats