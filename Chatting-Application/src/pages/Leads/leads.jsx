import React from 'react';
import './leads.css';
import assets from "../../assets/assets";

const Leads = () => {
  const coreTeamData_acm_leads = [
    {
      name: "S Sembon Surakshita",
      position: "Chair",
      image: assets.chair_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Gokul Prakash",
      position: "Vice Chair",
      image: assets.VC_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Ayushi Gupta",
      position: "Secretary",
      image: assets.Sec_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Yazhini B",
      position: "Deputy Secretary",
      image: assets.DS_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Mohammed Ashraf",
      position: "Treasurer",
      image: assets.Tre_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Abishadh Binu",
      position: "Webmaster",
      image: assets.webmaster_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  const headsAndMembersData_acm_leads = [
    {
      name: "Alen Varghese",
      position: "Technical Head",
      image: assets.technicalhead,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Krishna",
      position: "Creatives Lead",
      image: assets.creativeshead,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Ashwina",
      position: "Sponsorship Lead",
      image: assets.sponser_lead,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Grahisa",
      position: "Events Head",
      image: assets.events_head,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Mohan",
      position: "Creatives Head",
      image: assets.CH_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Johaan",
      position: "Corporate Head",
      image: assets.JcorH_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Nihal",
      position: "Sponser Head",
      image: assets.nihalSP_acm,
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <>
    <div className="leads-container_acm_leads">
      <h1>Our Brilliant Team</h1>

      {/* Core Team Section */}
      <h2>Core Team</h2>
      <div className="core-team-section_acm_leads">
        <div className="row_acm_leads">
          {coreTeamData_acm_leads.slice(0, 4).map((core, index) => (
            <div className="core-card_acm_leads" key={index}>
              <img src={core.image} alt={core.name} />
              <h3>{core.name}</h3>
              <p>{core.position}</p>
              <p>SRM ACM</p>
              <div className="social-icons_acm_leads">
                <a href={core.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={core.social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={core.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="row_acm_leads">
          {coreTeamData_acm_leads.slice(4).map((core, index) => (
            <div className="core-card_acm_leads" key={index}>
              <img src={core.image} alt={core.name} />
              <h3>{core.name}</h3>
              <p>{core.position}</p>
              <p>SRM ACM</p>
              <div className="social-icons_acm_leads">
                <a href={core.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={core.social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={core.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heads and Members Section */}
      <h2>Heads and Members</h2>
      <div className="heads-members-section_acm_leads">
        <div className="row_acm_leads">
          {headsAndMembersData_acm_leads.slice(0, 4).map((person, index) => (
            <div className="card_acm_leads" key={index}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.position}</p>
              <p>SRM ACM</p>
              <div className="social-icons_acm_leads">
                <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="row_acm_leads">
          {headsAndMembersData_acm_leads.slice(4).map((person, index) => (
            <div className="card_acm_leads" key={index}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.position}</p>
              <p>SRM ACM</p>
              <div className="social-icons_acm_leads">
                <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={person.social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={person.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Leads;
