import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery91.css'

const Gallery91 = (props) => {
  return (
    <div className="gallery91-gallery3 thq-section-padding">
      <div className="gallery91-max-width thq-section-max-width">
        <div className="gallery91-section-title">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="gallery91-text4 thq-heading-2">Photo Gallery</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="gallery91-text3 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery91-container1">
          <div className="gallery91-content">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="gallery91-slider swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="gallery91-slider-wrapper swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="gallery91-slider-slide1 swiper-slide"
                >
                  <div className="gallery91-container2">
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="gallery91-image1 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery91-container3">
                    <img
                      alt={props.image2Alt}
                      src={props.image2Src}
                      className="gallery91-image2 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery91-slider-slide2 swiper-slide"
                >
                  <div className="gallery91-container4">
                    <img
                      alt={props.image3Alt}
                      src={props.image3Src}
                      className="gallery91-image3 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery91-container5">
                    <img
                      alt={props.image4Alt}
                      src={props.image4Src}
                      className="gallery91-image4 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery91-slider-slide3 swiper-slide"
                >
                  <div className="gallery91-container6">
                    <img
                      alt={props.image5Alt}
                      src={props.image5Src}
                      className="gallery91-image5 thq-img-ratio-4-3"
                    />
                  </div>
                  <div className="gallery91-container7">
                    <img
                      alt={props.image6Alt}
                      src={props.image6Src}
                      className="gallery91-image6 thq-img-ratio-4-3"
                    />
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
                className="gallery91-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
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

Gallery91.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'image',
  image5Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1400',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'image',
  heading1: undefined,
  image6Alt: 'image',
  image3Alt: 'image',
  image5Alt: 'image',
  image6Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  image4Alt: 'image',
}

Gallery91.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.element,
  image6Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image4Alt: PropTypes.string,
}

export default Gallery91
