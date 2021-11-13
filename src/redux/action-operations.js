import axios from "axios";
import {
  getContactError,
  getContactRequest,
  getContactSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from "./actions";

axios.defaults.baseURL = "http://localhost:2000";

export const getContact = arg => async dispatch => {
  dispatch(getContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getContactSuccess(data));
  } catch (error) {
    dispatch(getContactError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(addContactRequest());
  const contact = {
    name,
    number,
  };

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
