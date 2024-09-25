import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div
      id="ContactUs"
      className={`contact-form-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form-section-title thq-flex-column">
          <div className="contact-form-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact-form-text16 thq-heading-2">
                    Contact us
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="contact-form-content2">
            <div className="contact-form-row1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span>
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form-text21 thq-body-small">
                      info@yachtsurveyor.co.uk
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form-row2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span>
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form-text17 thq-body-small">
                      <span>+44</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>7796392770</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xnnayjqg"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="contact-form-form thq-flex-column"
        >
          <div className="contact-form-container1">
            <div className="contact-form-input1">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                First Name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                name="First Name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form-input2">
              <label
                htmlFor="contact-form-7-last-name"
                className="thq-body-small"
              >
                Last Name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                name="Last Name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form-container2">
            <div className="contact-form-input3">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                name="Email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form-input4">
              <label htmlFor="contact-form-7-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                name="Phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form-container3">
            <div className="contact-form-input5">
              <label
                htmlFor="contact-form-7-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-7-message"
                name="Message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="contact-form-button thq-button-filled"
          >
            <span>
              {props.action ?? (
                <Fragment>
                  <span className="contact-form-text22 thq-body-small">
                    Submit
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  phone: undefined,
  email: undefined,
  action: undefined,
}

ContactForm.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  phone: PropTypes.element,
  email: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm
