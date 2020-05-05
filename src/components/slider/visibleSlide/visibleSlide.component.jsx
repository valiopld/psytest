import React from "react";

import "./visibleSlide.style.css";

const VisibleSlide = ({ id, bgColor, target, nSlides }) => {
  const nTarget = parseInt(target);
  const n = Math.abs(id - nTarget);
  const defaultStyle = {
    width: "100%",
    zIndex: "unset",
    transform: "unset",
  };

  const setStyleObj = {};
  if (nTarget === id) {
    setStyleObj.width = "100%";
    setStyleObj.zIndex = nSlides + 1;
    setStyleObj.transform = `scale3d(1.01, 1.35, 1) `;
  } else {
    setStyleObj.width = "10%";
    setStyleObj.width = (nSlides - n) * 10;
    setStyleObj.zIndex = nSlides - n;
    setStyleObj.transform = `scale3d(1.05, ${1 + (nSlides - n) / 50}, 1) `;
  }

  let styleObj = target || target === 0 ? setStyleObj : defaultStyle;
  return (
    <div
      id={id}
      className="visible-slide"
      style={{
        backgroundColor: bgColor,
        width: styleObj.width,
        zIndex: styleObj.zIndex,
        transform: styleObj.transform,
      }}
    ></div>
  );
};

export default VisibleSlide;
