import React, { useReducer } from "react";
import axios from "axios";
import * as uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "test",
        email: "test@gmail.com",
        phone: "1478523690",
        type: "personal",
      },
      {
        id: "2",
        name: "test2",
        email: "test2@gmail.com",
        phone: "1478523690",
        type: "personal",
      },
      {
        id: "3",
        name: "test3",
        email: "test3@gmail.com",
        phone: "1478523690",
        type: "professional",
      },
    ],
    current: null,
    filtered: null,
    // error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts

  // Add Contact
  const addContact = async (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = async (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Update Contact
  const updateContact = async (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Clear Current Contact
  // const clearCurrent = () => {
  //   dispatch({ type: CLEAR_CURRENT });
  // };

  // Set Current Contact
  const setCurrent = async (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Filter Contacts
  const filterContacts = async (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        // error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        // getContacts,
        //clearContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
