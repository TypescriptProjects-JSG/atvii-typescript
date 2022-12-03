import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao';
import { Component } from 'react';
import '../styles.css'


export default class Consumos extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1 className='titles'><strong>Produtos mais consumidos por gênero</strong></h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Sexo</th>
                                    <th>Nome do Produto</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Feminino</td>
                                    <td>Esmalte preto</td>
                                </tr>
                                <tr>
                                    <td>Masculino</td>
                                    <td>Shampoo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <h1 className='titles'> <strong> Serviços mais consumidos por gênero </strong></h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Sexo</th>
                                    <th>Nome do serviço</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Feminino</td>
                                    <td>Massagem</td>
                                </tr>
                                <tr>
                                    <td>Masculino</td>
                                    <td>Barbearia</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section >
        );
    }
}