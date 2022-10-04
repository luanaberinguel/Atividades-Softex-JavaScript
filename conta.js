var contacorrente = {

    cliente: 'José',
    conta: '1234-5',
    agencia: '6789-0',

}

var consultar_contacorrente = function(){
console.log('Cliente: ' + contacorrente.cliente);
console.log('Conta Corrente: ' + contacorrente.conta);
console.log('Agência: ' + contacorrente.agencia);
}

var contatos = ['telefone', 'email', 'endereço'];

var consultar_contatos = function(){
    console.log(contatos[0]);
    console.log(contatos[1]);
    console.log(contatos[contatos.length - 1]);
}

consultar_contacorrente();
consultar_contatos();
