import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ProtoHero from '../components/proto-hero'
import Slideshow2 from '../components/slideshow2'
import Qual from '../components/qual'
import ContactForm from '../components/contact-form'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Yacht Surveyor</title>
        <meta property="og:title" content="Yacht Surveyor" />
      </Helmet>
      <ProtoHero
        text={
          <Fragment>
            <span className="home-text10">
              <span className="home-text11">
                Surveying
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text12">Yachts</span>
              <br></br>
              <span className="home-text14">
                Securing
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text15">Journeys</span>
            </span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="home-text16">Contact Us</span>
          </Fragment>
        }
        rootClassName="proto-heroroot-class-name1"
      ></ProtoHero>
      <Slideshow2
        text2={
          <Fragment>
            <span className="home-text17">INSURANCE SURVEYS</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text18">PRE-PURCHASE SURVEYS</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text19">
              <span>OWNER&apos;S TECHNICAL REPRESENTATIVE</span>
              <br></br>
            </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text22">NEW BUILD SURVEYS</span>
          </Fragment>
        }
        rootClassName="slideshow2root-class-name"
      ></Slideshow2>
      <Qual
        text1={
          <Fragment>
            <span className="home-text23">YDSA - Large Yacht Group</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text24">
              IIMS - International Institute of Marine Surveying / Full Member
            </span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text25">
              MSA - Marine Survey Associates / Full Member
            </span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text26">
              YDSA -Yacht Designers &amp; Surveyors Association / Accredited
              Member
            </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text27">
              RINA - Royal Institution of Naval Architects / Associate Member
            </span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text28">
              International Marine Consultants / Grade A3 Surveyor
            </span>
          </Fragment>
        }
        rootClassName="qualroot-class-name"
      ></Qual>
      <ContactForm
        email={
          <Fragment>
            <span className="home-text29 thq-body-small">
              info@yachtsurveyor.co.uk
            </span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="home-text30 thq-body-small">
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
        }
        action={
          <Fragment>
            <span className="home-text34 thq-body-small">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text35 thq-heading-2">Contact us</span>
          </Fragment>
        }
        rootClassName="contact-formroot-class-name"
      ></ContactForm>
    </div>
  )
}

export default Home
