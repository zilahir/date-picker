import React from "react";
import "../../styles/arrow.sass";

const ArrowLeft = ({ className }) => {
  return (
    <svg
      className={className ? className + " arrow" : "arrow"}
      viewBox="0 0 1000 1000"
    >
      <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path>{" "}
    </svg>
  );
};

export default ArrowLeft;
