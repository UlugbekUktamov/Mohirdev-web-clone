import Content8 from "./Content8";

function Kategoriyalar({ kategoriya }) {
  return (
    <>
      <div className="Kategoriyalar">
        <div className="titles">
          <div className="title">
            <h3>Mohir tanlovlarni kategoriyalarga ko'ra amalga oshiring</h3>
          </div>
        </div>
        <div className="BadriddinovKurslar Kategoriyalar">
          <Content8 kategoriya={kategoriya} />
        </div>
      </div>
    </>
  );
}

export default Kategoriyalar;
