import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Richard stanford</h3>
        <p>Heyy i am RIchard Using ACM connect</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic1} alt="" />
        </div>
      </div>
      <button>logout</button>
    </div>
  )
}

export default RightSidebar