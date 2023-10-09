// eslint-disable-next-line no-unused-vars
import React from 'react'
import ContactItemBody from './ContactItemBody'
import ContactItemImage from './ContactItemImage'
import DeleteButton from './DeleteButton'

// eslint-disable-next-line react/prop-types
const ContactItem = ({ imageUrl, name, tag, onDelete, id }) => {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton onDelete={onDelete} id={id}/>
    </div>
  );
}

export default ContactItem
