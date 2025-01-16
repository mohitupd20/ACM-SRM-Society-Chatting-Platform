import React from "react";
import "./profile_update.css";
import assets from "../../assets/assets";
const ProfileUpdate = () => {
  const [image, setImage] = React.useState(null);
  return (
    <div className="profile">
      <div className="profile-container">
        <form className="form_profile">
          <h3>Profile Details</h3>
          <label htmlFor="avatar" className="avatar">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png,.jpg,.jpeg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              alt=""
              className="Profile_upload"
            />
            Upload profile picture
          </label>
          <div className="input">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="input_profile"
            />
            <textarea
              placeholder="Write profile bio"
              required
              className="textarea_profile"
            ></textarea>
            <button className="button_profile">Update</button>
          </div>
        </form>
        <img src={assets.logo_icon} alt="" className="logo_profile" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
