import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import "./Styles.scss"

const Modal = (props) => {
	const { showModal, content, handleCloseModal } = props

	return (
		<>
			{showModal && (
				<div className="modal--wrapper">
					<div className="modal--backdrop" onClick={handleCloseModal} />
					<div className="modal--carrot" />
					<div className="modal">
						<div className="modal--content">
							<h3 className="modal--content--title">Rules</h3>
							<p className="modal--content--body">{content}</p>
						</div>
						<FontAwesomeIcon icon={faTimes} className="modal--btn" onClick={handleCloseModal} />
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
