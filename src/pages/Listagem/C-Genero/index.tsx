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
                    <h1 className='titles'><strong>Clientes: sexo masculino</strong></h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome: </th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td>
                                        Carlos Eduardo Falandes
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                        <h1 className='titles'><strong>Sexo feminino</strong></h1>
                    <div className="tables"> 
                        <Table striped bordered hover variant="light">
                            <thead className='titles-table'>
                                <tr>
                                    <th>Nome: </th>
                                </tr>
                            </thead>
                            <tbody className='body-table'>
                                <tr>
                                    <td >
                                        Júlia Sousa Gayotto
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