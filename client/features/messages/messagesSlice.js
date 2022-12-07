import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  try {
    const { data } = await axios.get("/api/messages");
    return data;
  } catch (err) {
    console.error(err);
  }
});

const initialState = {
  messages: [],
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    gotNewMessageFromServer(state, action) {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export const { gotNewMessageFromServer } = messagesSlice.actions;
export default messagesSlice.reducer;

//question - when do you have to return in the reducer vs just updating state? diff between state and state.mess
//question - relationship between hooks and builder methods in extra reducers?
