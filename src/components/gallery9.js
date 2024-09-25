import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery9.css'

const Gallery9 = (props) => {
  return (
    <div className="gallery9-gallery3 thq-section-padding">
      <div className="gallery9-max-width thq-section-max-width">
        <div className="gallery9-section-title"></div>
        <div className="gallery9-container1">
          <div className="gallery9-content">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              data-autoplay-delay="6000"
              className="gallery9-slider swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="gallery9-slider-wrapper swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="gallery9-slider-slide1 swiper-slide"
                >
                  <div className="gallery9-container2">
                    <div className="gallery9-image1 thq-img-ratio-4-3">
                      <div className="gallery9-container3">
                        <span>
                          {props.text12 ?? (
                            <Fragment>
                              <span className="gallery9-text16">
                                Insurance Surveys
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="gallery9-container4">
                    <div className="gallery9-image2 thq-img-ratio-4-3">
                      <div className="gallery9-container5">
                        <span>
                          {props.text13 ?? (
                            <Fragment>
                              <span className="gallery9-text14">
                                Pre-Purchase SurveyS
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery9-slider-slide2 swiper-slide"
                >
                  <div className="gallery9-container6">
                    <div className="gallery9-image3 thq-img-ratio-4-3">
                      <div className="gallery9-container7">
                        <span>
                          {props.text1 ?? (
                            <Fragment>
                              <span className="gallery9-text15">
                                Owner&apos;s Technical Representative
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="gallery9-container8">
                    <div className="gallery9-image4 thq-img-ratio-4-3">
                      <div className="gallery9-container9">
                        <span>
                          {props.text11 ?? (
                            <Fragment>
                              <span className="gallery9-text17">
                                <span className="gallery9-text18">
                                  New Build SurveyS
                                </span>
                                <br></br>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery9-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery9.defaultProps = {
  text13: undefined,
  text1: undefined,
  text12: undefined,
  text11: undefined,
}

Gallery9.propTypes = {
  text13: PropTypes.element,
  text1: PropTypes.element,
  text12: PropTypes.element,
  text11: PropTypes.element,
}

export default Gallery9
