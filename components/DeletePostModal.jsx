import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";

function DeletePostModal({ postId }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();
    
    const deletePost = async () => {
        await axios.delete(`/api/posts/${postId}`)
        router.push("/")
    }

    return (
        <>
            <Button
                style={{ width: "130px", marginLeft: "20px" }}
                variant="danger"
                onClick={handleShow}
            >
                Delete Post
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Post...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                    <Button onClick={deletePost} variant="danger">Delete Post</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeletePostModal;
