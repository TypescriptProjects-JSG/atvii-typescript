import { Button } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import { Component } from 'react';
import '../../../Cadastrar/styles.css'


export default class EditarProduto extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1><strong>Editar Produto:</strong> Creme</h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Nome" >Nome do Produto:</label>
                                <input placeholder="Altere o nome do produto" type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Nome" >Valor R$:</label>
                                <input placeholder="Altere o valor do produto" type="number" min={0}/>
                            </div>
                            <div className="campo-button campo-btns">
                                <div className="button-l">
                                    <Button className="submit" variant="outline" href='/produtos'>Voltar</Button>{' '}
                                </div>
                                    <Button className="submit btn-resp" variant="outline" type='submit'>Editar</Button>{' '}
                            </div>
                        </form>
                    </div>
                </main>
    
            </section>
        )
    }
}