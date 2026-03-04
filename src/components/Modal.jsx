import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;