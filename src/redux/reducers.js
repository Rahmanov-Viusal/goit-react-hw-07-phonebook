import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getContactRequest,
  getContactSuccess,
  getContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from "./actions";

const items = createReducer([], {
  [getContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
