import { useContext } from "react";
import Alerta from '../../comuns/Alerta'
import EmpresaContext from './EmpresaContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(EmpresaContext);

    return (
        <Dialogo id='modalEdicao' titulo="Empresa" idformulario="formEdicaoEmpresa"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id='txtId' label="Código" tipo="number"
                name="codigo" value={objeto.codigo} handlechange={handleChange}
                requerido={false} readonly={true}
                maximocaracteres={5} />

            <CampoEntrada id="txtCnpj" label="CNPJ" tipo="number"
                name="cnpj" value={objeto.cnpj} handlechange={handleChange}
                requerido={true} readonly={false} textovalido="CNPJ Ok"
                textoinvalido="Informe o CNPJ" maximocaracteres={14} minimocaracteres={14} />

            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome} handlechange={handleChange}
                requerido={true} readonly={false} textovalido="Nome OK" textoinvalido="Informe o nome"
                maximocaracteres={100} />

            <CampoEntrada id="txtRazaoSocial" label="Razão Social" tipo="text"
                name="razaosocial" value={objeto.razaosocial} handlechange={handleChange}
                requerido={true} readonly={false} textovalido="Razão Social OK" textoinvalido="Informe o Razão Social"
                maximocaracteres={100} />

            <CampoEntrada id="txtSigla" label="Sigla" tipo="text"
                name="sigla" value={objeto.sigla} handlechange={handleChange}
                requerido={true} readonly={false} textovalido="Sigla OK" textoinvalido="Informe a Sigla"
                maximocaracteres={100} />
        </Dialogo>
    )
}

export default Form;