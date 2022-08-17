import React from "react";
import Content7 from "./Content7";

function MobilAndroid({ mobilFlutter }) {
  return (
    <>
      <div className="MobilAndroid">
        <div className="titles">
          <div className="title">
            <div className="border"></div>
            <div className="border2"></div>
            <h3>
              <span>Mobil Android/Flutter/iOS </span> kurslari
            </h3>
          </div>
        </div>
        <div className="BadriddinovKurslar MobilAndroid">
          <Content7 mobilFlutter={mobilFlutter} />
        </div>
      </div>
    </>
  );
}

export default MobilAndroid;
