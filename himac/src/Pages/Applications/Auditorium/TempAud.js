import React from "react";
import "../../Prod_Cat/Template/Temp1.css";

export default function TempAud(parse) {
  return (
    <div className="temp1">
      <div className="temp1_body">
        <div className="temp1_texts">
          <h1 className="temp1_title">{parse.title}</h1>
          <p className="temp1_desc">{parse.description}</p>
        </div>
        <div className="temp1_imgsec">
          <div className="temp1_imgcard">
            <img src={parse.img1} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt1}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img2} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt2}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img3} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt3}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img4} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt4}</h3>
          </div>

          <div className="temp1_imgcard">
            <img src={parse.img5} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt5}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img6} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt6}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img7} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt7}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img8} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt8}</h3>
          </div>

          <div className="temp1_imgcard">
            <img src={parse.img9} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt9}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img10} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt10}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img11} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt11}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img12} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt12}</h3>
          </div>

          <div className="temp1_imgcard">
            <img src={parse.img13} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt13}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img14} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt14}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img15} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt15}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img16} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt16}</h3>
          </div>

          <div className="temp1_imgcard">
            <img src={parse.img17} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt17}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img18} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt18}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img19} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt19}</h3>
          </div>
          <div className="temp1_imgcard">
            <img src={parse.img20} className="temp1_img" alt='' />
            <h3 className="temp1_imgtitle">{parse.imgt20}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
