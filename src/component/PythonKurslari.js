import Content3 from "./Content3";

function PythonKurslari({ allPythonKurslariImg }) {
  return (
    <>
      <div className="titles">
        <div className="title">
          <div className="border"></div>
          <div className="border2"></div>
          <h3>
            <span>Python</span> kurslari
          </h3>
        </div>
      </div>
      <div className="BadriddinovKurslar PythonKurslari">
        <Content3 allPythonKurslariImg={allPythonKurslariImg} />
      </div>
    </>
  );
}

export default PythonKurslari;
