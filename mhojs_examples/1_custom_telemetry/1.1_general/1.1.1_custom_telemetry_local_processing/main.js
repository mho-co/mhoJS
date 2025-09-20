//como enviar telemetria customizada processada no local
//Neste exemplo as mensagens de telemetria chegarao na tag CT1, CT2 e CT3 com os valores calculados a partir dos respectivos valores lidos.

version(1);//20/09/2025

//executa uma vez no inicio
let setup = function() {

};

//executa em loop
let loop = function() {

};

//funcao chamada a cada X segundos
let send_tel = function() {
 //exemplo de leitura multiplicando dois valores via modbus
 let potencia = mbc.MI(1)*mbc.MI(2); 
 cloud.send_double(1, potencia);

 //exemplo de leitura somando dois valores via AIs
 let vazao = io.readAI(1, 'i', 0, 10) + io.readAI(2, 'i', 0, 10); 
 cloud.send_double(2, vazao);

 //exemplo de leitura condicional
 if(io.readDI(1))
 {
    let temperatura = io.readAI(3, 'i', 0, 100); //leitura via analogico
    cloud.send_double(3, temperatura);
 }
};

timer.create(120*1000, "send_tel"); //timer criado para chamar a funcao a cada 120 segundos
