import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  function addToast({ title, type }) {
    const toast = {
      id: uuid(),
      title,
      type,
    };

    setMessages((previous) => [...previous, toast]);
  }

  function removeToast(id) {
    const toastLi = messages.filter((message) => message.id !== id);
    setMessages(toastLi);
  }

  return (
    <ToastContext.Provider
      value={{ addToast, removeToast, messages, setMessages }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
