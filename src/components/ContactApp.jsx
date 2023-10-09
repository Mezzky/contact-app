// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data'

const ContactApp = () => {
  const [contacts, setContacts] = useState(getData());

  const onDeleteHnadler = (id) => {
    const updateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updateContacts);
  }

  return (
    <div className='contact-app'>
      <h1>Daftar Contact</h1>
      <ContactList contacts={contacts} onDelete={onDeleteHnadler} />
    </div>
  )
}

export default ContactApp
