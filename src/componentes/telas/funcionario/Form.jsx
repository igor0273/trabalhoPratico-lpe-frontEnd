import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import FuncionarioContext from './FuncionarioContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';

function Form(){
    const { objeto, handleChange, acaoCadastrar, alerta, listaEmpresa }
    = useContext(FuncionarioContext);

    return(
        <Dialogo id="modalEdicao" titulo="Funcionario" idformulario="formEdicaoFuncionario"
        acaoCadastrar={acaoCadastrar}>
        <Alerta alerta={alerta} />
    

        <CampoEntrada id="txtNomeFunc" label="Nome" tipo="text"
            name="nome" value={objeto.nome}
            handlechange={handleChange}
            requerido={true} readonly={false}
            textovalido="Nome OK" textoinvalido="Informe o nome"
            maximocaracteres={40} />
            
        <CampoEntrada id="txtCpf" label="CPF" tipo="number"
            name="cpf" value={objeto.cpf}
            handlechange={handleChange}
            requerido={true} readonly={false}
            textovalido="CPF OK" textoinvalido="Informe o CPF"
            maximocaracteres={11} />

        <CampoEntrada id="txtRg" label="RG" tipo="number"
            name="rg" value={objeto.rg}
            handlechange={handleChange}
            requerido={true} readonly={false}
            textovalido="RG OK" textoinvalido="Informe RG" />
       
        <CampoSelect id="txtEmpresa" label="empresa"
            name="empresa" value={objeto.empresa}
            handlechange={handleChange}
            requerido={true}
            textovalido="Empresa OK"
            textoinvalido="Informe a Empresa">
            {
                listaEmpresa.map((emp) => (
                    <option key={emp.codigo} value={emp.codigo}>
                        {emp.nome}
                    </option>
                ))
            }
        </CampoSelect>
    </Dialogo>
    )

}
export default Form;