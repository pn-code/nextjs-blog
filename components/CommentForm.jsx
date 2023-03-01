import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CommentForm = ({ postId, setComments }) => {
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const submitComment = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/comments", {
            author: commentAuthor,
            content: commentContent,
            postId,
        });
        setComments((comments) => [res.data.data, ...comments]);
        setCommentAuthor("")
        setCommentContent("")
    };

    return (
        <Form onSubmit={(e) => submitComment(e)} className="mb-3">
            <h4>Add a Comment</h4>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    value={commentAuthor}
                    type="text"
                    placeholder="Enter name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                    onChange={(e) => setCommentContent(e.target.value)}
                    value={commentContent}
                    as="textarea"
                    rows={3}
                    placeholder="Enter comment"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default CommentForm;
