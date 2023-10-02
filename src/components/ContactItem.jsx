// eslint-disable-next-line no-unused-vars
import React from 'react'
import ContactItemBody from './ContactItemBody'
import ContactItemImage from './ContactItemImage'

// eslint-disable-next-line react/prop-types
const ContactItem = ({ imageUrl, name, tag }) => {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

export default ContactItem
