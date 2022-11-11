import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.some(
          contact =>
            contact.name.trim().toLowerCase() ===
            payload.name.trim().toLowerCase()
        )
          ? alert(`${payload.name} is already in contacts `)
          : state.contacts.push(payload);
      },
    },

    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
