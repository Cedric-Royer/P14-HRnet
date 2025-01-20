import React from "react";

function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        {message}
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default Modal;
