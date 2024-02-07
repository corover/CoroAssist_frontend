import React from "react";
import "./Styles.css"

function Options(props: any) {
  const { border, color, heading, firstLetter, onClick, bgColor } = props;

  return (
    <div>
      <div
       className="options-box"
       style={{
        color: `${color}`,
        border: ` ${border}`,
        background: `${bgColor}`,
       }}
       
       
        onClick={() => onClick(heading)}
      >
        <span > {heading}</span>
        <span
          style={{  fontSize: "25px", fontWeight: "500" }}
        >
          {firstLetter}
        </span>
      </div>
    </div>
  );
}

export default Options;
