import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './proto-hero.css'

const ProtoHero = (props) => {
  return (
    <div className={`proto-hero-container1 ${props.rootClassName} `}>
      <div className="proto-hero-container2">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="proto-hero-text3">
                <span className="proto-hero-text4">
                  Surveying
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="proto-hero-text5">Yachts</span>
                <br></br>
                <span className="proto-hero-text7">
                  Securing
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="proto-hero-text8">Journeys</span>
              </span>
            </Fragment>
          )}
        </span>
        <a href="#ContactUs" className="proto-hero-link button">
          <span>
            {props.button2 ?? (
              <Fragment>
                <span className="proto-hero-text9">Contact Us</span>
              </Fragment>
            )}
          </span>
        </a>
      </div>
    </div>
  )
}

ProtoHero.defaultProps = {
  rootClassName: '',
  text: undefined,
  button2: undefined,
}

ProtoHero.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  button2: PropTypes.element,
}

export default ProtoHero
