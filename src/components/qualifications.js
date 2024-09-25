import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './qualifications.css'

const Qualifications = (props) => {
  return (
    <div
      className={`qualifications-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="qualifications-max-width thq-section-max-width">
        <div className="qualifications-content">
          <div className="qualifications-container1">
            <img
              alt="large yacht group"
              src="/ydsa%20large-400h.png"
              className="qualifications-image11"
            />
            <span>
              {props.image1Description ?? (
                <Fragment>
                  <span className="qualifications-text19 thq-body-small">
                    YDSA - Large Yacht Group
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="qualifications-container2">
            <img
              alt="YDSA large yacht group"
              src="/iimslogo-400h.jpg"
              className="qualifications-image12 thq-img-round"
            />
            <span>
              {props.image1Description ?? (
                <Fragment>
                  <span className="qualifications-text19 thq-body-small">
                    YDSA - Large Yacht Group
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="qualifications-container3">
            <img
              alt="PlaceholderImage1302"
              src="/marine-survey-associates-logo-pos1-orig_orig-400h.jpg"
              className="qualifications-image13 thq-img-ratio-16-9"
            />
            <span>
              {props.image1Description12 ?? (
                <Fragment>
                  <span className="qualifications-text20 thq-body-small">
                    MSA - Marine Survey Associates / Full Member
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="qualifications-container4">
            <img
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="qualifications-image14"
            />
            <span>
              {props.image1Description11 ?? (
                <Fragment>
                  <span className="qualifications-text17 thq-body-small">
                    YDSA -Yacht Designers &amp; Surveyors Association /
                    Accredited Member
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="qualifications-container5">
            <img
              alt="PlaceholderImage1302"
              src="/logo_of_the_royal_institution_of_naval_architects%20(1)-400h.jpg"
              className="qualifications-image15"
            />
            <span>
              {props.image1Description10 ?? (
                <Fragment>
                  <span className="qualifications-text16 thq-body-small">
                    RINA - Royal Institution of Naval Architects / Associate
                    Member
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="qualifications-container6">
            <img
              alt="PlaceholderImage1302"
              src="/mecal-logo-6_orig-500h.png"
              className="qualifications-image16"
            />
            <span>
              {props.image1Description9 ?? (
                <Fragment>
                  <span className="qualifications-text18 thq-body-small">
                    International Marine Consultants / Grade A3 Surveyor
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Qualifications.defaultProps = {
  image1Description10: undefined,
  image1Description11: undefined,
  image1Description9: undefined,
  image1Description: undefined,
  rootClassName: '',
  image1Description12: undefined,
}

Qualifications.propTypes = {
  image1Description10: PropTypes.element,
  image1Description11: PropTypes.element,
  image1Description9: PropTypes.element,
  image1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  image1Description12: PropTypes.element,
}

export default Qualifications
