import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import DeletePostModal from "@/components/DeletePostModal";
import CommentCard from "@/components/CommentCard";

const PostDetails = () => {
    return (
        <Container fluid className="mx-4 my-2">
            <Row>
                <Col>
                    <h2>Title</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Description</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        "At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae. Itaque
                        earum rerum hic tenetur a sapiente delectus, ut aut
                        reiciendis voluptatibus maiores alias consequatur aut
                        perferendis doloribus asperiores repellat." "At vero eos
                        et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae. Itaque
                        earum rerum hic tenetur a sapiente delectus, ut aut
                        reiciendis voluptatibus maiores alias consequatur aut
                        perferendis doloribus asperiores repellat." "At vero eos
                        et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae. Itaque
                        earum rerum hic tenetur a sapiente delectus, ut aut
                        reiciendis voluptatibus maiores alias consequatur aut
                        perferendis doloribus asperiores repellat."
                    </p>
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
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </Row>
        </Container>
    );
};

export default PostDetails;
