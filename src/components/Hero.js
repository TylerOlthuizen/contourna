import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image"
import Button from "components/Button"
// import SVG  from ``
export default function Hero(props){
  const {
    height = 400,
    img,
    title,
    subheading,
    ctaTitle,
    ctaPath,
    imgPosition = "top left",
  } = props;
  console.log(ctaTitle, ctaPath);
  return(
    <React.Fragment>
      <section className="header py-6">
        <div className="container">
          <div className="is-flex-tablet is-align-items-center columns">
            <div className="header__content column is-half-tablet pr-5">
                {/* Any content here will be centered in the component */}
                {title && (
                  <h1 className="is-size-1">
                    {title}
                  </h1>
                )}
                {subheading && (
                  <p className="is-size-6">
                    {subheading}
                  </p>
                )}
                {ctaTitle && (
                  <Button title={ctaTitle} path={ctaPath} type="primary" />
                )}
            </div>
            <div className="header__illustration column is-half-tablet">
              <img src={img.publicURL} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

Hero.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
  ctaTitle: PropTypes.string,
  ctaPath: PropTypes.string,
};
