import { getToken } from "../seguranca/Autenticacao";

export const getFuncionarioServico = async () => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/funcionario`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const getFuncionarioServicoPorCodigoAPI = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/funcionario/${codigo}`,
    {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}

export const deleteFuncionarioServico = async codigo => {
    const response = 
    await fetch(`${process.env.REACT_APP_ENDERECO_API}/funcionario/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}


export const cadastraFuncionarioServico = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/funcionario`, {
        method: metodo,
        headers: { "Content-Type": "application/json",
        "authorization" : getToken() },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}