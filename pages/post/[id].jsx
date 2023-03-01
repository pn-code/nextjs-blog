import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import DeletePostModal from "@/components/DeletePostModal";
import CommentCard from "@/components/CommentCard";
import axios from "axios";
import CommentForm from "@/components/CommentForm";
import { useState } from "react";

const PostDetails = ({ post }) => {
    const [comments, setComments] = useState(post.comments);

    return (
        <Container fluid className="mx-4 my-2">
            <Row>
                <Col>
                    <h2>{post.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{post.content}</p>
                </Col>
            </Row>
            <Row>
                <Col className="gap-2">
                    <Link href="/">Back</Link>
                    <DeletePostModal />
                </Col>
            </Row>
            <Row className="mt-4">
                <h6>Comments</h6>
                <CommentForm postId={post.id} setComments={setComments} />
                {comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} />
                ))}
            </Row>
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

export default PostDetails;
