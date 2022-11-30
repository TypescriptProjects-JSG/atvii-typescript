import { Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import '../../Listagem/styles.css';


export default class ServicosAdc extends Component {
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
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Massagem</td>
                                    <td>R$ 500,00</td>    
                                    <td>
                                        <div>
                                            <a href={`/adicionar_servico/1`}>Adicionar ao cliente</a> <br />  
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