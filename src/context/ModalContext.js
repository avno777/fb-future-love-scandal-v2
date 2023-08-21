// ModalContext.js
import React, { createContext, useContext, useReducer } from "react";

const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, { showModal: false });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { ModalProvider, useModal };
