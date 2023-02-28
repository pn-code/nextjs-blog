import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";

const Feed = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                    <BlogPostCard></BlogPostCard>
                </Col>
            </Row>
        </Container>
    );
};

export default Feed;
