import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const res = await axios.get("/api/posts");
        if (!res.ok) {
            console.log(res)
        } 
            setPosts(res.data);
        }

    return (
        <Container>
            <Row>
                <Col>
                    {posts.map((post) => (
                        <BlogPostCard
                            title={post.title}
                            content={post.content}
                            id={post.id}
                            key={post.id}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Feed;
