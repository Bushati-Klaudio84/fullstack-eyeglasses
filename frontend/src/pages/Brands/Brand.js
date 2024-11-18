import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Table, Button, Card } from "react-bootstrap";
import { useBrandContext } from "../../context/BrandContext";
import { useAuthenticateContext } from "../../context/AuthenticateContex";
import ModalManager from "../../components/modals/ModalManager";
import "./Brands.css";
import { fields } from "./fields";

const Brands = () => {
    const { brands, updateBrand, createBrand, deleteBrand } = useBrandContext();
    const { authUser, logout } = useAuthenticateContext();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [caseModal, setCaseModal] = useState({ title: "", create: false, button: "" });
    const [dataId, setDataId] = useState({});
    const close = () => setOpen(!open);
    
    const handleCreate = () => {
        setCaseModal({ title: "Create Brand", create: true, button: "Create" });
        setOpen(true);
    };
    
    const handleEdit = (id) => {
        setDataId(id);
        setCaseModal({ title: "Edit Brand", create: false, button: "Update" });
        setOpen(true);
    };
    
    const handleDelete = async (id) => {
        await deleteBrand(id);
    };
    
    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };
    
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" className="navbar-modern">
                <Container>
                    <Navbar.Brand as={Link} to="/brands">Admin Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
                            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            {authUser && (
                                <>
                                    <Button variant="outline-light" className="logout-btn" onClick={handleLogout}>Logout</Button>
                                    <div className="user-auth">
                                        <span>{authUser.name?.charAt(0) + authUser.lastname?.charAt(0)}</span>
                                    </div>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className="p-4">
                <Row>
                    <Col md={2} className="sidebar bg-light">
                        <Nav className="flex-column p-3">
                            <h5>Navigation</h5>
                            <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={10}>
                        <Card className="mb-4 p-3 shadow">
                            <h4>Create a new Brand <Button variant="primary" onClick={handleCreate}>Create</Button></h4>
                        </Card>
                        <Table striped bordered hover responsive className="shadow-sm">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.map((el, index) => (
                                    <tr key={index}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td><Button variant="outline-primary" onClick={() => handleEdit(el.id)}>Edit</Button></td>
                                        <td><Button variant="outline-danger" onClick={() => handleDelete(el.id)}>Delete</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {open && (
                    <ModalManager
                        open={open}
                        close={close}
                        fields={fields}
                        case_modal={caseModal}
                        id={dataId}
                        create={createBrand}
                        update={updateBrand}
                    />
                )}
            </Container>
        </>
    );
};

export default Brands;
