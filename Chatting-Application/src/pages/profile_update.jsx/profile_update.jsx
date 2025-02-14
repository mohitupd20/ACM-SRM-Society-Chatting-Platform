import React, { useEffect } from "react";
import "./profile_update.css";
import assets from "../../assets/assets";
import { use } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [uid, setUid] = React.useState("");

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          setUid(user.uid);
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.data().name) {
            setName(docSnap.data().name);
          }
          if (docSnap.data().bio) {
            setBio(docSnap.data().bio);
          }
          if (docSnap.data().avatar) {
            setImage(docSnap.data().avatar);
          }
        } else {
          navigate("/");
        }
      },
      []
    );
  });

  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={profileUpdate} className="form_profile">
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
              onChange={(e = setName(e.target.value))}
              value={name}
              type="text"
              placeholder="Your Name"
              required
              className="input_profile"
            />
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
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
