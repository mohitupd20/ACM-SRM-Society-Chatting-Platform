import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  // Sample data for 4 team members
  const teamMembers = [
    {
      name: "John Doe",
      dept: "Computer Science",
      regNo: "123456",
      image: "/assets/john-doe.jpg",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Jane Smith",
      dept: "Information Technology",
      regNo: "654321",
      image: "/assets/jane-smith.jpg",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Alice Johnson",
      dept: "Software Engineering",
      regNo: "789012",
      image: "/assets/alice-johnson.jpg",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Bob Brown",
      dept: "Data Science",
      regNo: "345678",
      image: "/assets/bob-brown.jpg",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  // Add scroll animation for mobile
  useEffect(() => {
    const cards = document.querySelectorAll(".flip-card");

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        if (cardTop < window.innerHeight && cardBottom > 0) {
          card.classList.add("flip");
        } else {
          card.classList.remove("flip");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      {/* Cards Section */}
      <div className="cards-grid">
        {teamMembers.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-image"
                />
                <h3 className="card-name">{member.name}</h3>
                <p className="card-dept">{member.dept}</p>
                <p className="card-regNo">Reg No: {member.regNo}</p>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <h3 className="card-name">{member.name}</h3>
                <p className="card-dept">{member.dept}</p>
                <p className="card-regNo">Reg No: {member.regNo}</p>
                <div className="social-icons">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
