import React from 'react'

import './social_network.css'

import { ISocialNetwork } from '../../interface/social_network'

export const SocialNetwork = ({ url, icon, altext }: ISocialNetwork) => {
  return (
    <>
      <a href={ url ? url : '#!' } className='socialN__link'>
        <img src={ icon } alt={ altext } />
      </a>
    </>
  )
}
