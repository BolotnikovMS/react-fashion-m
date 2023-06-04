import React from 'react'
import './payday.css'

import paydayImg from './../../img/images/promo-img.jpg'

export const Payday = () => {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div className="payday__img">
            <img src={ paydayImg } alt="Payday" />
          </div>
          <div className="payday__text">
            <div className="payday__title">
              <span className="highlight">
                <span>
                  PAYDAY
                </span>
              </span>
              SALE NOW
            </div>
            <div className="payday__descr">
              <p>
                Spend minimal $100 get 30% off voucher code for your next purchase</p>
              <p>
                <span>1 June - 10 June 2021</span>
                <br />
                <span>*Terms & Conditions apply</span>
              </p>
            </div>
            <div className="payday__btns">
              <a href="#!">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
