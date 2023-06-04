import React from 'react'
import './brands.css'

import hm from './../../img/brands/HM.png'
import Amazon from './../../img/brands/Amazon.png'
import Lacoste from './../../img/brands/Lacoste.png'
import Levis from './../../img/brands/Levis.png'
import Obey from './../../img/brands/Obey.png'
import Shopify from './../../img/brands/Shopify.png'

export const Brands = () => {
  return (
    <section className='brands'>
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hm} alt="HM" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={Obey} alt="Obey" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={Shopify} alt="Shopify" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={Lacoste} alt="Lacoste" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={Levis} alt="Levis" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={Amazon} alt="Amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
