import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';

import Home from '../pages/Home';
// visualizacao
import Clientes from '../pages/Ver/Listagem/clientes';
import Produtos from '../pages/Ver/Listagem/produtos';
import Servicos from '../pages/Ver/Listagem/servicos';

// cadastro
import CadastrarClientes from '../pages/Cadastrar/clientes';
import CadastrarProdutos from '../pages/Cadastrar/produtos';
import CadastrarServico from '../pages/Cadastrar/servicos';

// update
import EditarCliente from '../pages/Ver/Editar/clientes';
import EditarProduto from '../pages/Ver/Editar/produtos';
import EditarServico from '../pages/Ver/Editar/servicos';

// listagem
import ConsumoGeneros from '../pages/Listagem/C-Genero/index'
import ConsumoValor from '../pages/Listagem/C-Valor/index'
import ConsumoMenor from '../pages/Listagem/C-Menos/index'
import ConsumoPSConsumido from '../pages/Listagem/C-MaiorPS/index'
import ConsumoConsumidor from '../pages/Listagem/C-MaiorQnt/index'
import Consumos from '../pages/Listagem/C-ProdServGen';

// adicionar
import ProdutosAdc from '../pages/Ver/Adicionar/produtos';
import ServicosAdc from '../pages/Ver/Adicionar/servicos';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* visualizacao */}
                <Route path='/clientes' element={<Clientes/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>

                {/* cadastro */}
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>

                {/* update */}
                <Route path='/editar_cliente/:id' element={<EditarCliente/>}/>
                <Route path='/editar_produto/:id' element={<EditarProduto/>}/>
                <Route path='/editar_servico/:id' element={<EditarServico/>}/>

                {/* listagem */}
                <Route path='/consumo_genero/' element={<ConsumoGeneros/>}/>
                <Route path='/consumo_valor/' element={<ConsumoValor/>}/>
                <Route path='/consumo_menor/' element={<ConsumoMenor/>}/>
                <Route path='/consumo_psmaisconsumido/' element={<ConsumoPSConsumido/>}/>
                <Route path='/consumo_consumidor/' element={<ConsumoConsumidor/>}/>
                <Route path='/consumo_prudto_servico_genero/' element={<Consumos/>}/>

                {/* adicionar */}
                <Route path='/adicionar/produtos/:id' element={<ProdutosAdc/>}/>
                <Route path='/adicionar/servicos/:id' element={<ServicosAdc/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;