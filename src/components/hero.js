import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div
      className={`hero-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero-container2">
        <h1>
          {props.heading2 ?? (
            <Fragment>
              <h1 className="hero-text12">
                <span className="hero-text13">
                  Surveying
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hero-text14">Yachts</span>
                <br className="hero-text15"></br>
                <span className="hero-text16">
                  Securing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hero-text17">Journeys</span>
                <br className="BIG"></br>
              </h1>
            </Fragment>
          )}
        </h1>
        <a href="#ContactUs" className="hero-link button">
          <span>
            {props.button2 ?? (
              <Fragment>
                <span className="hero-text19">Contact Us</span>
              </Fragment>
            )}
          </span>
        </a>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  heading2: undefined,
  button2: undefined,
  rootClassName: '',
}

Hero.propTypes = {
  heading2: PropTypes.element,
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Hero
