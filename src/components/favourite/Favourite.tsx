import React from 'react'
import { Card } from '../card/Card'

import './favourite.css'

import cardImg01 from './../../img/images/promo-01.jpg'
import cardImg02 from './../../img/images/promo-02.jpg'

export const Favourite = () => {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__header">
          <h2 className="title-2">Young’s Favourite</h2>
        </div>
        <div className="favourite__cards">
          <Card title='Trending on instagram' img={ cardImg01 } />
          <Card title='All Under $40' img={ cardImg02 } />
        </div>
      </div>
    </section>
  )
}
