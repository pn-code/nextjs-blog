import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginForm from "@/components/LoginForm";

const Login = () => {
    return (
        <Container fluid>
            <Row className="centered-row">
                <h1>Login</h1>
                <LoginForm />
            </Row>
        </Container>
    );
};

export default Login;
