import React from 'react'

import './download.css'

import img01 from './../../img/images/vouchers-img.png'
import appStore from './../../img/icons/app-store.png'
import googlePlay from './../../img/icons/google-play.png'

export const DownloadApp = () => {
  return (
    <section className="download">
      <div className="container">
        <div className="download__content">
          <div className="download__text">
            <h3 className="download__title">
              DOWNLOAD APP & GET THE VOUCHER!
            </h3>
            <div className="download__descr">
            Get 30% off for first transaction using Rondovision mobile app for now.
            </div>
            <div className="download__btns">
              <a href="#!">
                <img src={ appStore } alt="App Store" />
              </a>
              <a href="#!">
                <img src={ googlePlay } alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="download__img">
            <img src={ img01 } alt="Phone" />
          </div>
        </div>
      </div>
    </section>
  )
}
