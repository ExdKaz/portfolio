import React from "react";
import "./progress.css";
import { useState, useEffect } from "react";
function Progress() {
  const [progress, setProgress] = useState(0);
  const progressEndValue = 70;
  const speed = 20;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === progressEndValue) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="skill">
        <div
          className="circular-progress"
          style={{
            background: `conic-gradient(#9c27b0, #00bcd4, ${
              progress * 3.6
            }deg, #ededed 0deg)`,
          }}
        >
          <span className="progress-value">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Progress;
