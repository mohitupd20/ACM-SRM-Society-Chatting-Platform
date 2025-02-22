import React, { useState, useEffect } from "react";
import "./event.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import assets from "../../assets/assets";
import Navbar from "../Navbar/navbar";

const upcomingEvent = {
  name: "Ossome Hacks 2.0",
  date: "2025-03-13T00:00:00",
  location: "CENTRAL LIBRARY ,KARE",
  image: assets.acm_event1,
};

const previousEvents = [
  {
    name: "Prayatan 2.0 ",
    date: "2024-03-04",
    location: "SRM Convention Hall",
    image: assets.acm_event2,
  },
  {
    name: "Workshop on Web Devlopment",
    date: "2025-02-10",
    location: "Tech Park Auditorium",
    image: assets.acm_event3,
  },
];

const Event = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date(upcomingEvent.date).getTime();
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        setCountdown("Event Started");
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setCountdown(
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
      );
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="events-wrapper">
        <div className="events-container">
          <h2 className="section-title">
            <span className="dark-blue">Upcoming</span>{" "}
            <span className="whity">Events</span>
          </h2>
          <div className="upcoming-event">
            <img
              className="event-image"
              src={upcomingEvent.image}
              alt="Upcoming Event"
            />
            <div className="event-details">
              <h3>{upcomingEvent.name}</h3>
              <div className="event-info-box">
                <FontAwesomeIcon icon={faCalendar} className="event-icon" />{" "}
                {upcomingEvent.date.substring(0, 10)}
              </div>
              <div className="event-info-box">
                <FontAwesomeIcon icon={faLocationDot} className="event-icon" />{" "}
                {upcomingEvent.location}
              </div>
              <div className="event-info-box">
                <FontAwesomeIcon
                  icon={faHourglassHalf}
                  className="event-icon"
                />{" "}
                {countdown}
              </div>
              <button className="register-button">Register Now</button>
            </div>
          </div>
          <h2 className="section-title">
            <span className="dark-blue">Previous</span>{" "}
            <span className="whity">Events</span>
          </h2>
          <div className="previous-events">
            {previousEvents.map((event, index) => (
              <div key={index} className="event-card">
                <img
                  src={event.image}
                  alt={event.name}
                  className="previous-event-image"
                />
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <p>
                    <FontAwesomeIcon icon={faCalendar} className="event-icon" />{" "}
                    {event.date}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="event-icon"
                    />{" "}
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
