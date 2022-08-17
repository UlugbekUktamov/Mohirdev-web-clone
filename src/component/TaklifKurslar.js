/* eslint-disable no-unused-vars */
import React from "react";
import Content4 from "./Content4";

function TaklifKurslar({ allTaklifKurslar }) {
  return (
    <>
      <div className="TaklifKurslar">
        <div className="titles">
          <div className="title">
            <h3>Mohirlar taklif qilayotgan pullik kurslar</h3>
          </div>
        </div>
        <div className="BadriddinovKurslar TaklifKurslar">
          <Content4 allTaklifKurslar={allTaklifKurslar} />
        </div>
      </div>
    </>
  );
}

export default TaklifKurslar;
