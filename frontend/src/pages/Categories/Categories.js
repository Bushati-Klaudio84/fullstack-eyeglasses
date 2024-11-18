import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Table, Button } from "react-bootstrap";
import { useCategoryContext } from "../../context/CategoryContext";
import { useAuthenticateContext } from "../../context/AuthenticateContex";
import ModalManager from "../../components/modals/ModalManager";
import { fields } from "./fields";
import "./Categories.css";




const Categories = () => {
    const { categories, updateCategory, createCategories, deleteCategorie } = useCategoryContext();
    const{ authUser,logout } = useAuthenticateContext();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [caseModal, setCaseModal] = useState({ title: "", create: false, button: "" });
    const [dataId, setDataId] = useState({});
    const close = () => setOpen(!open);
    const handleCreate = () => {
        setCaseModal({ title: "Create Categories", create: true, button: "Create" });
        setOpen(!open);
    }
    const handleEdit = (id) => {
        setDataId(id);
        setCaseModal({ title: "Edit Categories", create: false, button: "Update" })
        setOpen(!open);
    }
    const handleDelete = async (id) => {
        await deleteCategorie(id);
    }
    const handleLogout = async() =>{
        await logout();
        navigate("/login");
    }
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/categories">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/brands">Brands</Nav.Link>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        {
                            authUser ?
                            <>
                            <Nav>
                            <Button variant="danger" className="logout-btn" onClick={handleLogout}>Logout</Button>
                            </Nav>
                            <div className="user-auth">
                                <span>
                                    {
                                        authUser.name?.charAt(0) +""+ authUser.lastname?.charAt(0)
                                    }
                                </span>
                            </div>
                            </>
                            :
                            ""
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col md={2} className="bg-light sidebar">
                        <h4 className="p-3">Navigation</h4>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={10} className="p-4">
                        <Col md={12} className="mb-4">
                            <h4>Create a new Categories <Button variant="primary" onClick={handleCreate}>Create</Button></h4>
                        </Col>
                        <Col md={12} className="mb-4">
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Created at</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((el, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{el.id}</td>
                                                    <td>{el.name}</td>
                                                    <td>{el.description}</td>
                                                    <td>{el?.created}</td>
                                                    <td>
                                                        <Button variant="primary" onClick={() => { handleEdit(el.id) }}>Edit</Button>
                                                    </td>
                                                    <td>
                                                        <Button variant="danger" onClick={() => { handleDelete(el.id) }}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </Table>
                        </Col>
                        {
                            open && <ModalManager
                                open={open}
                                close={close}
                                fields={fields}
                                case_modal={caseModal}
                                id={dataId}
                                create={createCategories}
                                update={updateCategory} />
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Categories;