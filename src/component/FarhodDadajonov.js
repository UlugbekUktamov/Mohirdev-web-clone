import React from "react";
import Content5 from "./Content5";

function FarhodDadajonov({ allFarhodDadajonovKurslar }) {
  return (
    <>
      <div className="FarhodDadajonov">
        <div className="titles">
          <div className="title">
            <div className="border"></div>
            <div className="border2"></div>
            <h3>
              <span>Farhod Dadajonov</span> darslari
            </h3>
          </div>
        </div>
        <div className="BadriddinovKurslar FarhodDadajonov">
          <Content5 allFarhodDadajonovKurslar={allFarhodDadajonovKurslar} />
        </div>
      </div>
    </>
  );
}

export default FarhodDadajonov;
