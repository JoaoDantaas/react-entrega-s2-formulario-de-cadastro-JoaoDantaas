import { useContext, useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import { ToastContext } from "../../contexts/ToastContext";
import { Container } from "./styles";

function Toast({ message }) {
  const [isLeave, setIsLeave] = useState(false);
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    let timer;
    if (isLeave) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 900);
    } else {
      timer = setTimeout(() => {
        setIsLeave(true);
      }, 2800);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <Container isLeave={isLeave} type={message.type}>
      {message.type === "sucess" ? (
        <AiFillCheckCircle size={24} />
      ) : (
        <FiInfo size={24} />
      )}
      <div>
        <strong>{message.title}</strong>
      </div>
      <button type="button" onClick={() => setIsLeave(true)}>
        X
      </button>
    </Container>
  );
}

export default Toast;
