import React from "react";
import "./progress.css";
function Progress() {
  // let circularProgress = document.querySelector(".circular-progress"),
  //   progressValue = document.querySelector(".progress-value");

  // let progressStartValue = 0,
  //   progressEndValue = 70,
  //   speed = 100;

  // let pro = setInterval(() => {
  //   progressStartValue++;
  //   progressValue.textContent = `${progressStartValue}%`;
  //   circularProgress.style.background = `conic-gradient(#9c27b0, #00bcd4, ${
  //     progressStartValue * 3.6
  //   }deg, #ededed 0deg)`;
  //   if (progressStartValue === progressEndValue) {
  //     clearInterval(pro);
  //   }
  // }, speed);
  return (
    <div>
      <div className="skill">
        <div className="circular-progress">
          <span className="progress-value">75%</span>
        </div>
      </div>
    </div>
  );
}

export default Progress;
