import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './slideshow2.css'

const Slideshow2 = (props) => {
  return (
    <div className={`slideshow2-container10 ${props.rootClassName} `}>
      <div className="slideshow2-gallery3 thq-section-padding">
        <div className="slideshow2-max-width thq-section-max-width">
          <div className="slideshow2-container11">
            <div className="slideshow2-content">
              <div
                data-thq="slider"
                data-loop="true"
                data-autoplay="true"
                data-navigation="true"
                data-pagination="true"
                data-autoplay-delay="5000"
                className="slideshow2-slider swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="slideshow2-slider-wrapper swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="slideshow2-slider-slide1 swiper-slide"
                  >
                    <div className="slideshow2-container12">
                      <img
                        alt={props.image1Alt}
                        src="/p1160771_orig-1400w.jpg"
                        className="slideshow2-image1 thq-img-ratio-4-3"
                      />
                      <div className="slideshow2-container13">
                        <span>
                          {props.text2 ?? (
                            <Fragment>
                              <span className="slideshow2-text14">
                                INSURANCE SURVEYS
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="slideshow2-container14">
                      <img
                        alt={props.image2Alt}
                        src="/p1160076_orig-1400w.jpg"
                        className="slideshow2-image2 thq-img-ratio-4-3"
                      />
                      <div className="slideshow2-container15">
                        <span>
                          {props.text3 ?? (
                            <Fragment>
                              <span className="slideshow2-text15">
                                PRE-PURCHASE SURVEYS
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="slideshow2-slider-slide2 swiper-slide"
                  >
                    <div className="slideshow2-container16">
                      <img
                        alt={props.image3Alt}
                        src="/p1280503_orig-1400w.jpg"
                        className="slideshow2-image3 thq-img-ratio-4-3"
                      />
                      <div className="slideshow2-container17">
                        <span>
                          {props.text4 ?? (
                            <Fragment>
                              <span className="slideshow2-text16">
                                <span>
                                  OWNER&apos;S TECHNICAL REPRESENTATIVE
                                </span>
                                <br></br>
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="slideshow2-container18">
                      <img
                        alt={props.image4Alt}
                        src="/whatsapp-image-2024-06-05-at-11-28-25-eac5d0f3_orig-1400w.jpg"
                        className="slideshow2-image4 thq-img-ratio-4-3"
                      />
                      <div className="slideshow2-container19">
                        <span>
                          {props.text5 ?? (
                            <Fragment>
                              <span className="slideshow2-text19">
                                NEW BUILD SURVEYS
                              </span>
                            </Fragment>
                          )}
                        </span>
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
                  className="slideshow2-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
    </div>
  )
}

Slideshow2.defaultProps = {
  text2: undefined,
  text3: undefined,
  text4: undefined,
  image4Alt: 'image',
  image3Alt: 'image',
  image1Alt: 'image',
  text5: undefined,
  image2Alt: 'image',
  rootClassName: '',
}

Slideshow2.propTypes = {
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  text5: PropTypes.element,
  image2Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slideshow2
