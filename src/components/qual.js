import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './qual.css'

const Qual = (props) => {
  return (
    <div className={`qual-container10 ${props.rootClassName} `}>
      <div className="qual-gallery">
        <div className="qual-container11">
          <img
            alt={props.imageAlt1}
            src="/ydsa%20large-1500h.png"
            className="qual-image1"
          />
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="qual-text20">YDSA - Large Yacht Group</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="qual-container12">
          <img
            alt={props.imageAlt1}
            src="/iimslogo-1500h.jpg"
            className="qual-image2"
          />
          <span>
            {props.text2 ?? (
              <Fragment>
                <span className="qual-text19">
                  IIMS - International Institute of Marine Surveying / Full
                  Member
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="qual-container13">
          <div className="qual-container14">
            <img
              alt={props.imageAlt1}
              src="/marine-survey-associates-logo-pos1-orig_orig-1500h.jpg"
              className="qual-image3"
            />
          </div>
          <span>
            {props.text3 ?? (
              <Fragment>
                <span className="qual-text21">
                  MSA - Marine Survey Associates / Full Member
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="qual-container15">
          <div className="qual-container16">
            <img
              alt="image"
              src="/ydsa-badge-accredited-1500h.jpg"
              className="qual-image4"
            />
          </div>
          <span>
            {props.text4 ?? (
              <Fragment>
                <span className="qual-text16">
                  YDSA -Yacht Designers &amp; Surveyors Association / Accredited
                  Member
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="qual-container17">
          <div className="qual-container18">
            <img
              alt={props.imageAlt1}
              src="/logo_of_the_royal_institution_of_naval_architects%20(1)-1500h.jpg"
              className="qual-image5"
            />
          </div>
          <span>
            {props.text5 ?? (
              <Fragment>
                <span className="qual-text17">
                  RINA - Royal Institution of Naval Architects / Associate
                  Member
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="qual-container19">
          <div className="qual-container20">
            <div className="qual-container21">
              <img
                alt={props.imageAlt1}
                src="/mecal-logo-6_orig-1500h.png"
                className="qual-image6"
              />
            </div>
          </div>
          <span>
            {props.text6 ?? (
              <Fragment>
                <span className="qual-text18">
                  International Marine Consultants / Grade A3 Surveyor
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Qual.defaultProps = {
  text4: undefined,
  text5: undefined,
  text6: undefined,
  imageAlt1: 'image',
  rootClassName: '',
  text2: undefined,
  text1: undefined,
  text3: undefined,
}

Qual.propTypes = {
  text4: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  text1: PropTypes.element,
  text3: PropTypes.element,
}

export default Qual
