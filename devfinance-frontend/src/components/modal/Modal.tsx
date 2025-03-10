import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({children, isOpen}) => {
if (isOpen == false) {
  return null;
}
  return ReactDOM.createPortal(
    <div className="modal-overlay active">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
