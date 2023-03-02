import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteCommentModal({ commentId, setComments }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteComment = async () => {
        await axios.delete(`/api/comments/${commentId}`);
        setComments((comments) =>
            comments.filter((comment) => comment.id !== commentId)
        );
    };

    return (
        <>
            <Button
                style={{ width: "130px", marginLeft: "20px" }}
                variant="danger"
                onClick={handleShow}
            >
                Delete Comment
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Comment...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this comment?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                    <Button onClick={deleteComment} variant="danger">
                        Delete Comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteCommentModal;
