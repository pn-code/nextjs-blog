import Card from "react-bootstrap/Card";
import DeleteCommentModal from "./DeleteCommentModal";

const CommentCard = ({ comment, setComments }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{comment.author}</Card.Title>
                <Card.Text>{comment.content}</Card.Text>
                <DeleteCommentModal
                    commentId={comment.id}
                    setComments={setComments}
                />
            </Card.Body>
        </Card>
    );
};

export default CommentCard;
