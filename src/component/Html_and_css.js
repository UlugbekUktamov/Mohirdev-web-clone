/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import Html_and_css_Content from "./Html_and_css_Content";

function HTml_and_css(props) {
  return (
    <>
      <div className="Html_and_css">
        <div className="container">
          <div className="title">
            <div className="border"></div>
            <h3>
              <span>HTML, CSS, BOOTSTRAP</span>ni bepul o'rganing
            </h3>
          </div>
          <Html_and_css_Content allHtmlAndCssImage={props.allHtmlAndCssImage} />
        </div>
      </div>
    </>
  );
}

export default HTml_and_css;
