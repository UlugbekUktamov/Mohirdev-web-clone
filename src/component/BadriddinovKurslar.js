/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Content2 from "./Content2";

function BadriddinovKurslar({ badriddinovKurs }) {
  return (
    <>
      <div className="BadriddinovKurslar1">
        <div className="titles">
          <div className="title">
            <div className="border"></div>
            <div className="border2"></div>
            <h3>
              <span>Samar Badriddinov</span> kurslari
            </h3>
          </div>
        </div>
        <div className="BadriddinovKurslar">
          <Content2 badriddinovKurs={badriddinovKurs} />
        </div>
      </div>
    </>
  );
}

export default BadriddinovKurslar;
