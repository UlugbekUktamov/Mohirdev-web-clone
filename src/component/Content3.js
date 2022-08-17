/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Content3({ allPythonKurslariImg }) {
  return (
    <>
      <div className="content">
        <div className="image">
          <img src={allPythonKurslariImg.TelegramBot} />
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
          <h3>Mukammal Telegram Bot</h3>
          <p>
            By <span>Anvar Narzullayev</span> in <span>Anvar Narzullayev</span>
          </p>
          <div className="content-footer">
            <h3>247,000 UZS</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={allPythonKurslariImg.Algoritmlar} />
          <div className="overlay"></div>
          <div className="input-value">
            <button>Ro'yxatdan o'tish</button>
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
          <h3>Ma'lumotlar tuzilmasi va algoritmlar</h3>
          <p>
            By <span>Anvar Narzullayev</span> in <span>Anvar Narzullayev</span>
          </p>
          <div className="content-footer">
            <h3>Bepul</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={allPythonKurslariImg.PythonAsoslari} />
          <div className="overlay"></div>
          <div className="input-value">
            <button>Ro'yxatdan o'tish</button>
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
          <h3>Dasturlash Asoslari. Python</h3>
          <p>
            By <span>Anvar Narzullayev</span> in <span>Anvar Narzullayev</span>
          </p>
          <div className="content-footer">
            <h3>Bepul</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={allPythonKurslariImg.Django} />
          <div className="overlay"></div>
          <div className="input-value">
            <button>Ro'yxatdan o'tish</button>
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
          <h3>Django 3 - Pythonda Full stack Web Dasturlash</h3>
          <p>
            By <span>Anvar Narzullayev</span> in <span>Anvar Narzullayev</span>
          </p>
          <div className="content-footer">
            <h3>Bepul</h3>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content3;
