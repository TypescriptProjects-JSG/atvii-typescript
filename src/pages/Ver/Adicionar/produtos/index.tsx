import {Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import '../../Listagem/styles.css';


export default class ProdutosAdc extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1 className="titles">  <strong>Produtos WB  </strong></h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead className="titles-table">
                                <tr>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Creme</td>
                                    <td>R$ 120,00</td>    
                                    <td>
                                        <div>
                                            <a className="add-produto" href={'#'}>Adicionar ao cliente</a> <br />  
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button className="submit botao-add" variant="outline" href='/clientes'> Voltar </Button>{' '}
                    </div>
                </main>
            </section>
        );
    }
}