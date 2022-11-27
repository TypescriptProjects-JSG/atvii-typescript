import './style.css';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Component } from 'react';

export default class Navbar_ extends Component {
    render(){

        return (
            <>
            <Navbar className='nav' variant="dark" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand  className="logo" href="/"> <strong> W B  </strong></Navbar.Brand>
                    </div>
                    <ul className="nav-links">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Ver" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                                    <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                                    <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/cadastrar_cliente">Cliente</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_produto">Produto</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_servico">Serviço</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Listagem" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/consumo_consumidor">Mais consumiram</NavDropdown.Item>
                                    <NavDropdown.Item href="/consumo_genero">Gênero</NavDropdown.Item>
                                    <NavDropdown.Item href="/consumo_psmaisconsumido">Mais consumidos</NavDropdown.Item>
                                    <NavDropdown.Item href="/consumo_menor" >Menos consumiram</NavDropdown.Item>
                                    <NavDropdown.Item href="/consumo_valor" >Mais comsumiram em valor</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </ul>
                </Container>
            </Navbar>
        </>
    );
    }
}
// import { Component } from 'react';


// export default class Navbar_ extends Component {
//     render(){

//     }
// }