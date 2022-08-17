import React from "react";

/* eslint-disable jsx-a11y/alt-text */
function Content12({ footer }) {
  return (
    <>
      <div className="footer">
        <div className="left-content">
          <h3>2022 Mohirdev LLC.All Rights Reserved.</h3>
        </div>
        <ul className="right-content">
          <li>To'lov usullari:</li>
          <li>
            <img src={footer.Payme} />
          </li>
          <li>
            <img src={footer.Click} />
          </li>
          <li>
            <img src={footer.Visa} />
          </li>
          <li>
            <img src={footer.MasterCard} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Content12;
