import React from "react";
import "./slider.style.css";

import { setColor } from "./slider.conf";

import VisibleSlide from "./visibleSlide/visibleSlide.component";
import EventSlide from "./eventSlide/eventSlide.component";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.nSlides = props.slides;

    this.state = {
      target: null,
    };
  }

  onMouse = {
    over: (e) => this.setState({ target: e.target.id }),
    out: () => this.setState({ target: null }),
  };

  render() {
    const visibleSlider = [];
    const eventSlider = [];
    const sliderWidth = `${this.nSlides * 4}rem`;

    for (let i = 0; i < this.nSlides; ++i) {
      const color = setColor(i, this.nSlides);

      let newVisibleSlide = (
        <VisibleSlide
          key={i}
          id={i}
          bgColor={color}
          target={this.state.target}
          nSlides={this.nSlides}
        />
      );
      let newEventSlide = (
        <EventSlide
          key={i}
          id={i}
          onMouseOver={this.onMouse.over}
          onMouseOut={this.onMouse.out}
        />
      );
      visibleSlider.push(newVisibleSlide);
      eventSlider.push(newEventSlide);
    }
    return (
      <div className="slider">
        <div className="visibleSlider" style={{ width: sliderWidth }}>
          {visibleSlider}
        </div>
        <div className="eventSlider" style={{ width: sliderWidth }}>
          {eventSlider}
        </div>
      </div>
    );
  }
}

export default Slider;
