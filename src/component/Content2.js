/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Content2({ badriddinovKurs }) {
  return (
    <>
      <div className="content">
        <div className="image">
          <img src={badriddinovKurs.Reactjs} />
          <div className="overlay"></div>
          <div className="input-value">
            <button>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <br />
              Savatchaga qo'shish
            </button>
          </div>
        </div>
        <div className="content-titles">
          <div className="icons">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <h3>ReactJS, Redux, NextJS & GraphQL To'liq Kurs. Real Loyihalar</h3>
          <p>
            By <span>Samar Badriddinov</span> in <span>React.JS</span>
          </p>
          <div className="content-footer">
            <h3>247,000 UZS</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={badriddinovKurs.Javascript} />
          <div className="overlay"></div>
          <div className="input-value">
            <button>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <br />
              Savatchaga qo'shish
            </button>
          </div>
        </div>
        <div className="content-titles">
          <div className="icons">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          <h3>JavaScript To'liq Kurs - “From 0 to Hero”</h3>
          <p>
            By <span>Samar Badriddinov</span> in <span>JavaScript</span>
          </p>
          <div className="content-footer">
            <h3>247,000 UZS</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content2;
