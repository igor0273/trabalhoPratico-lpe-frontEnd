import { useContext } from "react";
import EmpresaContext from "./FuncionarioContext";
import Alerta from '../../comuns/Alerta';

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto }
        = useContext(EmpresaContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Funcionarios</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => novoObjeto()}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos == null && <h1>Nenhum Funcionario encontrado</h1>}
            {listaObjetos.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                            <th scope="col">Código</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">RG</th>
                            <th scope="col">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map(objeto => (
                            <tr key={objeto.codigo}>
                                <td align="center">
                                    <button className="btn btn-info"
                                        onClick={() => editarObjeto(objeto.codigo)}
                                        data-bs-toggle="modal" data-bs-target="#modalEdicao">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button className="btn btn-danger" title="Remover"
                                        onClick={() => { remover(objeto.codigo); }}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                                <td>{objeto.codigo}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.cfp}</td>
                                <td>{objeto.rg}</td>
                        
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Tabela;