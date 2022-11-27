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
                        <h1 className='titles'><strong>Produto mais consumido</strong></h1>
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Creme</td>
                                    <td>12</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h1 className='titles'> <strong> Serviço mais consumido </strong></h1>
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>Massagem</td>
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