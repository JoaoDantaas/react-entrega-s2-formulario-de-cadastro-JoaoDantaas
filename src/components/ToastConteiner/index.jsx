import { useState, useContext } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import Toast from "../Toast";
import { Container } from "./styles";

function ToastContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const { messages } = useContext(ToastContext);

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}

export default ToastContainer;
