import React from 'react'

import { SocialNetwork } from '../socials/SocialNetwork'

import './footer.css'

import fbIcon from './../../img/socials/fb.svg'
import inIcon from './../../img/socials/in.svg'
import instIcon from './../../img/socials/inst.svg'
import twIcon from './../../img/socials/tw.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__title">FASHION</h3>
            <p className="footer__descr">
              Complete your style with awesome clothes from us.
            </p>
            <div className="footer__socials">
              <SocialNetwork icon={ fbIcon } altext='FB' />
              <SocialNetwork icon={ inIcon } altext='IN' />
              <SocialNetwork icon={ instIcon } altext='Ins' />
              <SocialNetwork icon={ twIcon } altext='TW' />
            </div>
          </div>
          <div className="footer__menu">
            <ul>
              <li>Company</li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Contact us</a></li>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">Careers</a></li>
            </ul>
            <ul>
              <li>Quick Link</li>
              <li><a href="#!">Share Location</a></li>
              <li><a href="#!">Orders Tracking</a></li>
              <li><a href="#!">Size Guide</a></li>
              <li><a href="#!">FAQs</a></li>
            </ul>
            <ul>
              <li>Legal</li>
              <li><a href="#!">Terms & conditions</a></li>
              <li><a href="#!">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
