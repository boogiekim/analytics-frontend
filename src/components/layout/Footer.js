// const Footer = () => {
//   return (
//     <footer className="App-footer">
//       <p>© 2023 ASCENDING Inc. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo-3x.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

const contactData = [
  {
    icon: <FontAwesomeIcon icon={solid("phone")} color={"#03A9F4"} />,
    title: 'Phone',
    desc: <a href="tel: 518-288-7586" target="_blank">5182887586</a>,
    type: 'Phone'
  },
  {
    icon: <FontAwesomeIcon icon={solid("envelope")} color={"#03A9F4"} />,
    title: 'Email',
    desc: <a href="mailto: support@ascendingdc.com" target="_blank">support@ascendingdc.com</a>,
    type: 'Email'
  },
  {
    icon: <FontAwesomeIcon icon={solid("location-dot")} color={"#03A9F4"} />,
    title: 'Address',
    desc: <a href="https://goo.gl/maps/hYiW7n2PicgDQHwu8" target="_blank" rel="noopener noreferrer">2751 Prosperity Avenue, Suite 240, Fairfax, VA, 22031-4397</a>,
    type: 'Address'
  },
]

const companyList = [
  {
    title: <Link to={"/about/why-ascending"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About Us</Link>,
  },
  {
    title: <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Client Success</Link>,
  },
  {
    title: <a target={"_blank"} rel="noreferrer" href="https://blog.ascendingdc.com/">Tech Insight</a>,
  },
  {
    title: <Link to="/careers" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Career</Link>,
  },
  {
    title: <Link to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Learning Management System</Link>,
  },
  {
    title: <a target={"_blank"} href="https://portal.ascendingdc.com/">Training Portal</a>,
  },
  {
    title:
      <div>
        <a href="https://www.linkedin.com/company/ascendingllc/mycompany/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={brands("linkedin-in")} /></a>
        &nbsp;
        &nbsp;
        &nbsp;
        <a href="https://www.youtube.com/channel/UCi5_sn38igXkk-4hsR0JGtw" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={brands("youtube")} /></a>
      </div>
  },
]

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="ascending-common-footer">
        <hr style={{ border: 'none', height: '2px', color: '#ccc', backgroundColor: '#ccc' }} />
        <div className='flex-wrapper'>
          <div className="flex-wrapper-item">
            <div
              className="flex-wrapper-item-logo"
              onClick={() => {
                window.location.href = '/'
              }}
            ><img src={logo} alt="" /></div>
            <div className="flex-wrapper-item-logo-desc">
              ASCENDING is an AWS Certified Advanced Consulting Partner. ASCENDING provides cloud strategic consulting service, cloud migration, data&analytics, cloud operation and web/application development services to our organization clients. ASCENDING also provides customize IT, Cloud training (on-site bootcamp and online Udemy class).
            </div>
          </div>
          <div className="flex-wrapper-item pc-margin-top-10">
            <div className="company-box">
              <div className="company-box-title">Company</div>
              <div className="company-box-content">
                {companyList.map((d, index) => {
                  return (
                    <div className="company-box-content-item" key={index}>{d.title}</div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex-wrapper-item pc-margin-top-10">
            <div className="contact-box">
              {contactData.map((d, index) => {
                return (
                  <div key={index} className="contact-box-item">
                    <div className="contact-box-item-icon">{d.icon}</div>
                    <div className="contact-box-item-info">
                      <div className="contact-box-item-info-title">{d.title}</div>
                      <div>{d.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className='ascending'>
            {new Date().getFullYear()} Copyright © ASCENDING Inc.
          </div>
          <a href='https://app.termly.io/document/privacy-policy/0c91586e-1d8d-489e-83af-70b343467a34' target={"_blank"} rel="noreferrer">Privacy Policy</a>
          <a href='https://app.termly.io/document/terms-of-use-for-website/c5f9adb5-4979-4c41-81de-904f87321a4e' target={"_blank"} rel="noreferrer">Terms & Conditions</a>
          <a href='https://app.termly.io/document/disclaimer/42aa6c61-8521-4196-9c15-33f9197b44b2' target={"_blank"} rel="noreferrer">Disclaimer</a>
          <a href='https://app.termly.io/document/cookie-policy/f7e2fa90-3efd-4d4e-bc38-a7e6258ed58c' target={"_blank"} rel="noreferrer">Cookie Policy</a>
        </div>
      </div>
    )
  }
}

export default Footer