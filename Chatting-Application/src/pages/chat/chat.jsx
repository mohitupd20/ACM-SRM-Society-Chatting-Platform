import React from 'react'
import './chat.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import Chatbox from '../../Components/Chatbox/Chatbox'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

``
const chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar/>
        <Chatbox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default chat