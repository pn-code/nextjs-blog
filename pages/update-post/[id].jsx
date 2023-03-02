import React from "react";
import UpdatePostForm from "@/components/UpdatePostForm";
import { Container } from "react-bootstrap";
import axios from "axios";

const UpdatePost = ({ post }) => {
    return (
        <Container>
            <h1>Update Post</h1>
            <UpdatePostForm post={post} />
        </Container>
    );
};

export async function getServerSideProps({ query }) {
    const { id: postId } = query;

    // Fetch data from external API
    const res = await axios.get(`http://localhost:3000/api/posts/${postId}`);

    // Pass data to the page via props
    return { props: { post: res.data } };
}

export default UpdatePost;
