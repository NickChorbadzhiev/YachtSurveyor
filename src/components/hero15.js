import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero15.css'

const Hero15 = (props) => {
  return (
    <div className="hero15-container1 thq-section-padding">
      <div className="hero15-column">
        <div className="hero15-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero15-text6 thq-heading-1">
                  Discover the Power of Our Products
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero15-text4 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </Fragment>
            )}
          </p>
          <div className="hero15-container2">
            <input
              type="email"
              placeholder={props.textinputPlaceholder}
              className="hero15-textinput thq-input"
            />
            <div className="hero15-container3">
              <button className="hero15-button thq-button-filled">
                <span>
                  {props.action3 ?? (
                    <Fragment>
                      <span className="hero15-text5 thq-body-small">
                        Sign Up
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero15.defaultProps = {
  content1: undefined,
  action3: undefined,
  textinputPlaceholder: 'placeholder',
  heading1: undefined,
}

Hero15.propTypes = {
  content1: PropTypes.element,
  action3: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero15
