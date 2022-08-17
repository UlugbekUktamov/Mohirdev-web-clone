import Content6 from "./Content6";

function JavascriptComponent({ JavascriptKurslari }) {
  return (
    <>
      <div className="JavascriptComponent">
        <div className="titles">
          <div className="title">
            <div className="border"></div>
            <div className="border2"></div>
            <h3>
              <span>Javascript</span> kurslari
            </h3>
          </div>
        </div>
        <div className="BadriddinovKurslar JavascriptComponent">
          <Content6 JavascriptKurslari={JavascriptKurslari} />
        </div>
      </div>
    </>
  );
}
export default JavascriptComponent;
