import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import '../styles.css'
import { Component } from 'react';


export default class CadastrarClientes extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1 className='margin-titulo'><strong>Cadastro de Clientes</strong></h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Nome">Nome Completo:</label>
                                <input placeholder='Insira o nome completo' type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input placeholder='Insira o nome social' type="text"/>
                            </div>
                            <div className="campo-duplo">
                                <div className="field esquerda">
                                    <label htmlFor="Genero">Gênero: </label>
                                    <select id="genero">
                                        <option>Selecione seu gênero</option>
                                        <option>Feminino</option>
                                        <option>Masculino</option>
                                        <option>Outro</option>
                                    </select>
                                </div>
                                <div className="field direita">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input type="text" placeholder='XXX.XXX.XXX-XX'/>
                                </div>
                            </div>
                            <div className="field">
                                    <label htmlFor="Telefone">Telefone:</label>
                                    <input placeholder='XX XXXXXXXX' type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="rg">RG:</label>
                                <input type="text" placeholder='XX.XXX.XXX-X'/>
                            </div>
                            <div className="field">
                                <label htmlFor="cpf">RG data de emissao:</label>
                                <input type="date"/>
                            </div>
                            <div className="btns">
                                <Button className="add add-color" variant="outline-dark" type="button">Adicionar Telefone</Button>
                                <Button className="add add-color" variant="outline-dark" type="button">Adicionar RG</Button>
                                <Button className="add add-green" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}