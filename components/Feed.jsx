import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";

const Feed = ({ admin }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const res = await axios.get("/api/posts");
        if (!res.ok) {
            console.log(res);
        }
        setPosts(res.data);
    };

    return (
        <Container>
            {admin && <Link href="/new-post">New Post</Link>}
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
