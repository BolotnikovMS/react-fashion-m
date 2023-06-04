import React from 'react'
import { Form } from '../form/Form'

import './subscribe.css'

export const Subscribe = () => {
  return (
    <section className='subscribe'>
      <div className="container">
        <div className="subscribe__content">
          <h3 className="subscribe__title">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h3>
          <p className="subscribe__descr">
            Type your email down below and be young wild generation
          </p>
          <div className="subscribe__form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
