// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const ContactItemImage = ({imageUrl}) => {
  return (
    <div className='contact-item__image'>
      <img src={imageUrl} alt="contact avatar" />
    </div>
  )
}

export default ContactItemImage
