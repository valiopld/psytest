import React from "react";

import "./eventSlide.style.css";

const EventSlide = ({ id, onMouseOver, onMouseOut }) => (
  <div
    className="event-slide"
    id={id}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  />
);

export default EventSlide;
