import React, { useEffect } from "react";
import "./profile_update.css";
import assets from "../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { upload } from "../../lib/upload";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [uid, setUid] = React.useState("");
  const [prevImage, setPrevImage] = React.useState("");
  const { setUserData } = useContext(AppContext);

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
      if (!prevImage && !image) {
        toast.error("Please upload an image");
        return;
      }

      const docRef = doc(db, "users", uid);
      let imgUrl = prevImage; // Default to previous image

      if (image) {
        imgUrl = await upload(image); // Upload only if a new image is selected
        setPrevImage(imgUrl);
      }

      await updateDoc(docRef, {
        avatar: imgUrl,
        bio: bio,
        name: name,
      });

      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate("/chat");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setBio(data.bio || "");
          setPrevImage(data.avatar || assets.avatar_icon); // Use prevImage for Firebase URL
        }
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

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
              src={image ? URL.createObjectURL(image) : prevImage}
              alt=""
              className="Profile_upload"
            />
            Upload profile picture
          </label>
          <div className="input">
            <input
              onChange={(e) => setName(e.target.value)}
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
