import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, fname, lname, city  } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.fname = fname;
        existingUser.lname = lname;
         existingUser.city = city;
      
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      state.entities = state.entities.filter((user) => user.id !== id);
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;
