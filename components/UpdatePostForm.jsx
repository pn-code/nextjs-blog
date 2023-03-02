import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import axios from "axios";

const UpdatePostForm = ({ post }) => {
    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);

    const router = useRouter();

    const updatePost = async (e) => {
        e.preventDefault();
        const res = await axios.put(`/api/posts/${post.id}`, {
            title: postTitle,
            content: postContent,
        });
        router.push("/");
        console.log(res);
    };

    return (
        <Form onSubmit={(e) => updatePost(e)}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title: </Form.Label>
                <Form.Control
                    onChange={(e) => setPostTitle(e.target.value)}
                    value={postTitle}
                    type="text"
                    placeholder="Enter post title"
                />
                <Form.Text className="text-muted">
                    Think of an excellent title for your post.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    onChange={(e) => setPostContent(e.target.value)}
                    value={postContent}
                    as="textarea"
                    rows={10}
                    placeholder="Enter post body..."
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UpdatePostForm;
