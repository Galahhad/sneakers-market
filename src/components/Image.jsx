import React from "react";
import sneakers from "../images/cross.jpg";

function Image() {
  return (
    <div className="img_wrapper">
      <img src={sneakers} alt="sneakers" className="img" />
    </div>
  );
}

export default Image;
