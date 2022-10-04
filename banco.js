var cliente = {

    nome:'Maria',
    login:'marialinda',
    senha:'1234',
    conta: '5678-9',
    saldo: 100
}

var deposito = function(valor){
    cliente.saldo = cliente.saldo + valor;
}

var saque = function(valor){
    cliente.saldo = cliente.saldo - valor;
}

var consultar_saldo = function(){
    console.log('SALDO: ' + cliente.saldo);
}

var consultar_cliente = function(){
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Conta: ' + cliente.conta);
    console.log('Saldo: ' + cliente.saldo);

}

deposito(200);
consultar_saldo();

