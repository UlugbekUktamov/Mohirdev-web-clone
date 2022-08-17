import React from "react";
import Content1 from "./Content1";

function ContentPraktikum(props) {
  return (
    <>
      <div className="content-praktikum">
        <div className="container">
          <div className="title">
            <h3>Kasbga yo'naltirilgan Praktikumlar</h3>
            <p>
              6 oyda 0 dan ish topish darajasiga chiqing. Boshlang'ich bilim
              talab qilinmaydi.
            </p>
            <div className="line"></div>
          </div>
          <Content1 Image={props.allPraktikumImg} />
        </div>
      </div>
    </>
  );
}

export default ContentPraktikum;
