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
                    <div className="tables">
                        <h1 className='titles'> <strong>Clientes que mais consumiram</strong></h1>
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome</th>
                                    <th>Produtos</th>
                                    <th>Servicos</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Carlos Eduardo Falandes</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section >
        );
    }
}