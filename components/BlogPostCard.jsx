import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogPostCard = ({ title, content }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content.substring(0, 100)}...</Card.Text>
                <Button variant="primary">Read More...</Button>
            </Card.Body>
        </Card>
    );
};

export default BlogPostCard;
