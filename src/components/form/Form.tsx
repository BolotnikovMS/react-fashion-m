import React from 'react'

import './form.css'

export const Form = () => {
  return (
    <form className='form'>
      <div className="form__content">
        <div className="form__group">
          <input type="email" placeholder='Add your email here' className="form__input" />
          <button type="submit" className="form__btn">SEND</button>
        </div>
      </div>
    </form>
  )
}
