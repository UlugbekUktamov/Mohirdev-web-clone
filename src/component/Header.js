/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

function Header({ image, addClass1 }) {
  return (
    <header>
      <div className="header-container">
        <ul>
          <li>
            <b>
              <img src={image} />
            </b>
          </li>
          <li>
            <b>tezkor kurslar</b>
            <div className="border"></div>
          </li>
          <li>
            <b>praktikum kurslar</b>
            <div className="border"></div>
          </li>
          <li>
            <b>biz haqimizda</b>
            <div className="border"></div>
          </li>
        </ul>
        <p onClick={addClass1}>kirish | Ro'yxatdan o'tish</p>
      </div>
    </header>
  );
}
export default Header;
