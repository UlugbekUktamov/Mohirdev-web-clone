/* eslint-disable jsx-a11y/alt-text */
function Content({ img }) {
  return (
    <content>
      <div className="content-left">
        <h1>
          Dasturlashga <br /> oid online <br /> darslar
        </h1>
        <div className="content-input">
          <input placeholder="Kurs qidirish" />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="content-right">
        <img src={img} />
      </div>
    </content>
  );
}

export default Content;
