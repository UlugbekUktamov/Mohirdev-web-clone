import React from "react";
import Content10 from "./Content10";
import Content11 from "./Content11";
import Content12 from "./Content12";

function BarchaMaqolalar({ maqolalar, footer }) {
  return (
    <>
      <div className="BarchaMaqolalar">
        <div className="BadriddinovKurslar BarchaMaqolalar">
          <Content10 maqolalar={maqolalar} />
        </div>
        <div className="btn">
          <button>Barcha maqolalar</button>
        </div>
        <footer>
          <Content11 footer={footer} />
        </footer>
        <Content12 footer={footer} />
      </div>
    </>
  );
}

export default BarchaMaqolalar;
