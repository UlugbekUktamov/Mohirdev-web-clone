/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable jsx-a11y/alt-text */
function KonsultatsiyaOlish(props) {
  const [option1, setOption1] = useState([
    "Data Science va Sun'iy Intellekt",
    "Ilk Qadam: C va Python",
    "Full Stack Java",
    "Full Stack Python",
    "Full Stack Javascript (MERN)",
    "Golang",
    "Frontend dasturlash",
    "IOS dasturlash",
    "Android dasturlash",
    "Digital Marketing",
    "Boshqa",
  ]);

  const [active, setActive] = useState("");
  const [active1, setActive1] = useState("");
  return (
    <>
      <div
        className="overflow"
        onClick={() => {
          setActive("before");
          setActive1("before");
        }}
      ></div>
      <div className="Konsultatsiya-olish">
        <div className="container">
          <div className="kotlin-content">
            <h3 className="title">Konsultatsiya olish</h3>
            <p>
              Bog'lanish uchun kontaktlaringizni qoldiring. Biz siz
              <br /> bilan bog'lanamiz.
            </p>
            <input
              onClick={() => {
                setActive("active");
              }}
              id={active}
              className="ismingiz"
              placeholder="ismingiz"
            />
            <div className="input-img">
              <div className="image">
                <img src={props.UzbekistanFlag} />
              </div>
              <input
                id={active1}
                onClick={() => setActive1("active1")}
                type="text"
                placeholder="Telefon raqamingiz"
              />
            </div>
            <p className="boglanish-title">
              Agar siz chet elda bo'lsangiz, iltimos telegram orqali
              <br /> @mohirdevsales ga bog'laning.
            </p>
            <h5>Kurs tanlash</h5>
            <select>
              {option1.map((opt) => (
                <option key={opt} className="Option">
                  {opt}
                </option>
              ))}
            </select>
            <button style={{ marginLeft: "20px" }} className="button">
              Jo'natish
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KonsultatsiyaOlish;
