import { createAction } from "@reduxjs/toolkit";

export const getContactRequest = createAction("contact/getContactRequest");
export const getContactSuccess = createAction("contact/getContactSuccess");
export const getContactError = createAction("contact/getContactError");

export const addContactRequest = createAction("contact/addContactRequest");
export const addContactSuccess = createAction("contact/addContactSuccess");
export const addContactError = createAction("contact/addContactError");

export const deleteContactSuccess = createAction(
  "contact/deleteContactSuccess"
);
export const deleteContactRequest = createAction(
  "contact/deleteContactRequest"
);
export const deleteContactError = createAction("contact/deleteContactError");

export const filterContact = createAction("contact/filter");
