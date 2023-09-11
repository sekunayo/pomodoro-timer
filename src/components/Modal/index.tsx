import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styles from "./Modal.module.css";

interface ModalProps {
  children: JSX.Element;
  closeModal: () => void;
}
const Modal = ({ children, closeModal }: ModalProps) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal();
  });
  return (
    <div className={styles.modal}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Modal;
