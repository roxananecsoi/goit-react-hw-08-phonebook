import { notification } from 'antd';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import setAxiosDefaults from '../setAxiosDefaults';

setAxiosDefaults();

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      console.log('Datele din API:', response.data);

      return response.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to fetch contacts. Please try again.',
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to add contact. Please try again.',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to delete contact. Please try again.',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to edit contact. Please try again.',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
