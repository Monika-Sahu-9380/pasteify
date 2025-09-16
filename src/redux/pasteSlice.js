import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  // Converting the JSON string back into JS object if pastes key is present
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const newPaste = action.payload;

        // 🔎 Check if newPaste with the same title already exists
        const alreadyExists = state.pastes.some(
          (paste) => paste.title.toLowerCase() === newPaste.title.toLowerCase()
        );

        if (!alreadyExists) {
          state.pastes.push(newPaste);
          // Converting the JS object 'state.pastes', into a JSON string
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste added.", {icon: '✅'});
        } else {
          toast.error("A paste with this title already exists.", {icon: '⚠️'});
        }
      
    },
    updateToPastes: (state, action) => {
      const newPaste = action.payload;
      var index = state.pastes.findIndex((item) => item._id === newPaste._id);
      if (index >= 0) {
        state.pastes[index] = newPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated!", {icon: '✨'});
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      var index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted!", {icon: '🗑️'});
      }
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
