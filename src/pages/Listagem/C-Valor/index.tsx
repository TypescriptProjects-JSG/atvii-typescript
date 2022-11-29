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
                        <h1 className='titles'> <strong>Clientes que mais consumiram em valor </strong></h1>
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Carlos Eduardo Falandes</td>
                                    <td>R$ 670</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section >
        );
    }
}