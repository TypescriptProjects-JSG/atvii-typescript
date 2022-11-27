import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import '../styles.css';


export default class Servicos extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1 className="titles"> <strong> Serviços WB</strong> </h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className="titles-table">
                                <tr>
                                    <th>Serviço</th>
                                    <th>Preço</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Massagem</td>
                                    <td>R$ 500,00</td>    
                                    <td>
                                        <div>
                                            <a  className="editar-cps" href={`/editar_servico/1`}>Editar</a> <br />  
                                            <a className="remover-cps" href="##">Remover</a>
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