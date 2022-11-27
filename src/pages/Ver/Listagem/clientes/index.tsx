import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../styles.css';
import { Component } from 'react';


export default class Clientes extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1 className="titles"> <strong> Clientes WB </strong> </h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className="titles-table">
                                <tr>
                                    <th>Nome</th>
                                    <th>Nome Social</th>
                                    <th>Genero</th>
                                    <th>CPF</th>
                                    <th>RG</th>
                                    <th>Telefone</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Carlos Eduardo Falandes </td>
                                    <td> Eduardo </td>
                                    <td> Masculino </td>
                                    <td> 444.444.444-44 </td>
                                    <td> 44.444.444-4 </td>
                                    <td> 44 44444-4444 </td>                    
                                    <td>
                                        <div>
                                            <a  className="editar-cps" href={`/editar_cliente/1`}>Editar</a> <br />     
                                            <a className="adicionar"  href={`adicionar_produto/1`}>Adicionar Produtos</a> <br />
                                            <a className="adicionar" href={`adicionar_servico/1`}>Adicionar Serviços</a> <br />
                                            <a  className="remover-cps" href="##">Remover</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section>
        );
    }
}