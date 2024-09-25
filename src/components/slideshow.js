import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './slideshow.css'

const Slideshow = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className="slideshow-container">
      {slideNumber === 1 && (
        <div className="slideshow-slide1">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="slideshow-image1"
          />
          <div
            onClick={() => setSlideNumber(4)}
            className="slideshow-left-button1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="slideshow-right-button1">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slideNumber === 2 && (
        <div className="slideshow-slide2">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="slideshow-image2"
          />
          <div className="slideshow-left-button2">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="slideshow-right-button2">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slideNumber === 3 && (
        <div className="slideshow-slide3">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="slideshow-image3"
          />
          <div className="slideshow-left-button3">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="slideshow-right-button3">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {slideNumber === 4 && (
        <div className="slideshow-slide4">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="slideshow-image4"
          />
          <div className="slideshow-left-button4">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="slideshow-right-button4">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

Slideshow.defaultProps = {
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
}

Slideshow.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Slideshow
