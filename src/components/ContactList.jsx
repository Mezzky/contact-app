// eslint-disable-next-line no-unused-vars
import React from 'react'
import ContactItem from './ContactItem';

// eslint-disable-next-line react/prop-types
const ContactList = ({contacts, onDelete}) => {
  return (
    <div className='contact-list'>
      {
        contacts.map((contact) => (
          <ContactItem 
          key={contact.id} 
          id={contact.id}
          onDelete={onDelete}
          {...contact} />
        ))
      }
    </div>
  )
}

export default ContactList
