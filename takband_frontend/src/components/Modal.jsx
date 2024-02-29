import React, { useEffect } from "react";
import "../css/modal.css";

const Modal = ({ children, isOpen, onClose, title }) => {
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!event.target.closest(".modal-content")) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h2 className="modal-title mx-auto text-xl">{title}</h2>
				</div>
				<div className="modal-body pt-28 sm:pt-2">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
