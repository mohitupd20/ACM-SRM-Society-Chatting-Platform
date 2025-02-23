import React from "react";
import "./about.css";
import assets from "../../assets/assets";
import Navbar from "../Navbar/navbar";
const About = () => {
  const teamMembers = [
    {

        name: "Mohit Upadhyay",
        dept: "CINTEL",
        regNo: "RA2311033010168",
        image: assets.about_2,
        social: {
          github: "https://github.com/mohitupd20",
          linkedin: "https://www.linkedin.com/in/mohit-updhyay/",
          instagram: "https://www.instagram.com/mpxupd_?igsh=MWg1NW45eGxyc2F1Ng==",
      },
    },
    {
      name: "Shubhankur",
      dept: "DSBS",
      regNo: "RA2312704010033",
      image: assets.about_1,
      social: {
        github: "https://github.com/shubhxydv",
        linkedin: "https://www.linkedin.com/in/shubhankur-yadav-/",
        instagram: "#",
      },
    },
    {
      name: "Arnav Pathak",
      dept: "CINTEL",
      regNo: "RA2311033010138",
      image: assets.about_3,
      social: {
        github: "https://github.com/Pathakarnav22",
        linkedin: "https://www.linkedin.com/in/arnavpathak27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/arnaavvv_",
      },
    },
    {
      name: "Lokesh Janti",
      dept: "CINTEL",
      regNo: "RA2311026010715",
      image: assets.about_4,
      social: {
        github: "https://github.com/LokeshJasti05",
        linkedin: "https://www.linkedin.com/in/lokesh-jasti-66a6a728b/",
        instagram: "https://www.instagram.com/jasti._.lokesh/",
      },
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="leads-container_acm_leads">
      <h1 className="about-title">About Us</h1>
      <div className="cards-spacing"></div>
      <div className="cards-grid">
        {teamMembers.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.image} alt={member.name} className="card-image" />
                <h3 className="card-name">{member.name}</h3>
                <p className="card-dept">{member.dept}</p>
                <p className="card-regNo">Reg No: {member.regNo}</p>
                <div className="social-icons">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="flip-card-back">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-dept">{member.dept}</p>
                <p className="card-regNo">Reg No: {member.regNo}</p>
                <div className="social-icons">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="quote-spacing"></div>
      <h2 className="team-quote">"Building connections through code."</h2>
    </div>
    </>
  );
  
};

export default About;
