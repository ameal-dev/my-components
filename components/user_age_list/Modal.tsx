import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }: any) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<StyledModalHeader>
					<img
						src='./svg/icon__remove_one_bgwhite.svg'
						alt='close button'
						width='50px'
						onClick={handleCloseClick}
					/>
				</StyledModalHeader>
				{title && <h1>{title}</h1>}
				<StyledModalBody>{children}</StyledModalBody>
			</StyledModal>
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById("modal")!
		);
	} else {
		return null;
	}
};

const StyledModalBody = styled.div`
	padding-top: 10px;
`;

const StyledModalHeader = styled.div`
	display: flex;
	position: absolute;
	top: -1.5rem;
	right: -1.7rem;
	font-size: 4rem;
	cursor: pointer;
	justify-content: flex-end;
	font-size: 25px;
`;

const StyledModal = styled.div`
	background: black;
	width: 500px;
	height: 300px;
	color: white;
	border: 2px solid white;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	padding: 15px;
`;
const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
`;

export default Modal;
