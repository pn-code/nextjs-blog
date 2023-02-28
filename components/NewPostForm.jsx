import React from "react";
import { Form, Button } from "react-bootstrap";

const NewPostForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formPostTitle">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" placeholder="Enter post title" />
                <Form.Text className="text-muted">
                    Think of an excellent title for your post.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPostDescription">
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" placeholder="Enter post description" />
                <Form.Text className="text-muted">
                    Give a vivid description of your post. This will be
                    displayed alongside your title on the blog post cards.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPostBody">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Enter post body..."/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default NewPostForm;
