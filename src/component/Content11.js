/* eslint-disable jsx-a11y/alt-text */
function Content11({ footer }) {
  return (
    <>
      <div className="first-content ">
        <p>
          Mohirdev ta'lim platformasi bilan <br /> o'zingizga qulay vaqtda,
          istalgan <br /> joyda, chegarasiz ta'lim oling!
        </p>
        <div className="information">
          <div className="phone-number">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>+998 91 005 66 00</p>
          </div>
          <div className="email">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>info@mohirdev.uz</p>
          </div>
        </div>
        <div className="icons">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <i class="fa fa-wifi" aria-hidden="true"></i>
          <i class="fa fa-pinterest" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
      </div>
      <div className="second-content ">
        <ul>
          <h3>Platforma</h3>
          <li>Bepul kurslar</li>
          <li>Pullik kurslar</li>
          <li>Praktikum [beta]</li>
        </ul>
        <ul>
          <h3>Kompaniya</h3>
          <li>Biz haqimizda</li>
          <li>Ommaviy oferta</li>
          <li>Chegirmalar</li>
          <li>Imtiyoz</li>
          <li>To'lov turlari</li>
        </ul>
      </div>
      <div className="third-content ">
        <ul>
          <h3>Praktikum</h3>
          <li>Ilk qadam: C va Python asoslari</li>
          <li>Data Science</li>
          <li>Full Stack Python</li>
          <li>MERN</li>
          <li>GO</li>
          <li>IOS Development</li>
          <li>Java Devlopment</li>
          <li>Android Development</li>
          <li>Frontend</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
      <div className="fourth-content">
        <ul>
          <h3>Qo'llab-quvvatlash</h3>
          <li>Bog'lanish</li>
          <li>Telegram bot</li>
          <li>Qo'llanma</li>
          <li>FAQ</li>
          <li>
            <img src={footer.zoodPay} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Content11;
