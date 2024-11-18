import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, InputGroup, Row, Container, Card } from 'react-bootstrap';
import { useAuthenticateContext } from "../../context/AuthenticateContex";
import Alert from 'react-bootstrap/Alert';
import "./Login.css";

const Login = () => {
    const { login } = useAuthenticateContext();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState({ error: false, message: "", status: 0 });
    const [values, setValues] = useState({ email: "", password: "" });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await login(values);
            if (result.status === 201) {
                navigate("/brands");
            } else {
                throw new Error(result.response.data.statusCode);
            }
        } catch (error) {
            if (error.message === "404") {
                setLoginError({
                    error: true,
                    message: "User with this email was not found",
                    status: 404
                });
            }
            return;
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className="p-4 shadow-lg rounded" style={{ maxWidth: "400px", width: "100%" }}>
                <Card.Body>
                    <h4 className="mb-4 text-center">Login</h4>
                    {loginError.error && (
                        <Alert variant="danger" className="text-center">
                            {loginError.message}
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    onChange={handleChange}
                                    name="email"
                                    value={values.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    onChange={handleChange}
                                    name="password"
                                    value={values.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 rounded-pill">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
