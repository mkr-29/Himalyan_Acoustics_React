import React from "react";
import "../../Prod_Cat/Template/Temp1.css";

export default function TempDoo(parse) {
  return (
    <div className="temp1">
      <div className="temp1_body">
        <div className="temp1_texts">
          <h1 className="temp1_title">{parse.title}</h1>
          <p className="temp1_desc">{parse.description}</p>
        </div>
        <div className="temp1_imgsec">
          <div className="temp1_imgcard">
            <img src={parse.img1} className="temp1_img" />
            <h3 className="temp1_imgtitle">{parse.imgt1}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img2} className="temp1_img" />
            <h3 className="temp1_imgtitle">{parse.imgt2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
