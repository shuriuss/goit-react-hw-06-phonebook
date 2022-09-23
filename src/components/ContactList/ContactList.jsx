import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

import { getContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import { useSelector } from 'react-redux';

function ContactList() {
  const contacts = useSelector(getContacts);
  // const newConntact = Array.from(contacts)
  const dispatch = useDispatch();


  console.log(contacts);
  




  const handleDelete = (id) =>  dispatch(deleteContact(id));
  

  return (
    <>
      {contacts.length === 0 ? (
        <p>No contact</p>
      ) : (
        <>
          <ul className={s.contact__list}>
            {contacts.map(({ id, name, number }) => (
              <li key={id} className={s.contact__item}>
                <p>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => handleDelete(id)}
                  className={s.contact__button}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
// ContactList.propTypes = {
//   handleDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default ContactList;
