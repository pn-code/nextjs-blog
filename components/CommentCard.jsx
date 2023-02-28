import Card from 'react-bootstrap/Card';

const CommentCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Username</Card.Title>
        <Card.Text>
          Here's some feedback left by a visitor of the website.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentCard