import Card from "react-bootstrap/Card";

const CommentCard = ({ comment }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{comment.author}</Card.Title>
                <Card.Text>{comment.content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CommentCard;
