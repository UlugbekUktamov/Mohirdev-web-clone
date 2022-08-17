/* eslint-disable jsx-a11y/alt-text */
function Content8({ kategoriya }) {
  return (
    <>
      <div className="content">
        <div className="image">
          <img src={kategoriya.bepultKurslar} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Bepul Kurslar</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.htmlCSsBootstrap} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>HTML, CSS, Bootstrap</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.ReactjsKategoriya} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>React.Js</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.JavascriptKategoriya} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Javascript</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.PythonKategoriya} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Python</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.MobilDasturlashKategoriya} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Mobil dasturlash</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.WebDasturlash} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Web dasturlash</h3>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src={kategoriya.pullikKurslar} />
          <div className="overlay"></div>
        </div>
        <div className="content-titles">
          <h3>Pullik kurslar</h3>
        </div>
      </div>
    </>
  );
}
export default Content8;
