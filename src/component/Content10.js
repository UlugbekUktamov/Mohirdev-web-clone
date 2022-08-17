/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Content10({ maqolalar }) {
  return (
    <>
      <div className="content">
        <div className="image">
          <img src={maqolalar.PrintHelloWorld} />
        </div>
        <div className="content-titles">
          <p>BOSHQA</p>
          <h3> Print(«Hello world»)</h3>
          <div className="comment">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={maqolalar.PythonMaqolalar} />
        </div>
        <div className="content-titles">
          <p>BOSHQA</p>
          <h3>Pythondan qanday maqsadda foydalangan yaxshi?</h3>
          <div className="comment">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={maqolalar.Kompyuter} />
        </div>
        <div className="content-titles">
          <p>BOSHQA</p>
          <h3>Qanday kompyuter tanlash kerak?</h3>
          <div className="comment">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content10;
