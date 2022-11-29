/* eslint-disable react/jsx-pascal-case */
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import '../../../Cadastrar/styles.css'


export default class EditarCliente extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1><strong>Editar Cliente:</strong> Carlos Eduardo Falandes</h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Nome" >Nome Completo: </label>
                                <input placeholder='Altere o nome completo' type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input placeholder='Altere o nome social' type="text"/>
                            </div>
                            <div className="campo-duplo">
                                <div className="field esquerda">
                                    <label htmlFor="Genero">Gênero:</label>
                                    <select>
                                        <option>Selecione um gênero</option>
                                        <option key='Feminino' value='Feminino'>Feminino</option>
                                        <option key='Masculino' value='Masculino'>Masculino</option>
                                    </select>
                                </div>
                                <div className="field direita">
                                    <label htmlFor="Social">Telefone:</label>
                                    <input placeholder='XX XXXXXXXX' type="text" />
                                </div>
                            </div>

                            <div className="campo-duplo">
                                <div className="field esquerda">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input type="text" placeholder='XXX.XXX.XXX-XX'/>
                                </div>
                                <div className="field direita">
                                    <label htmlFor="cpf">CPF data de emissao:</label>
                                    <input  type="date"/>
                                </div>
                            </div>
                            <div className="campo-duplo">
                                <div className="field esquerda">
                                    <label htmlFor="rg">RG:</label>
                                    <input type="text" placeholder='XX.XXX.XXX-X'/>
                                </div>
                                <div className="field direita">
                                    <label htmlFor="cpf">RG data de emissao:</label>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="campo-button">
                                <div className="button-l">
                                    <Button className="submit" variant="outline" href='/clientes'>Voltar</Button>{' '}
                                </div>
                                <div>
                                    <Button className="submit" variant="outline" type='submit'>Editar</Button>{' '}
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}