import Card from "react-bootstrap/Card";
import Link from "next/link";

const BlogPostCard = ({ title, content, id }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content.substring(0, 100)}...</Card.Text>
                <Link href={`/post/${id}`}>Read More...</Link>
            </Card.Body>
        </Card>
    );
};

export default BlogPostCard;
