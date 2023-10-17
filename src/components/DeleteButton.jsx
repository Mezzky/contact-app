// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const DeleteButton = ({id, onDelete}) => {
  return < b u t ton className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton
