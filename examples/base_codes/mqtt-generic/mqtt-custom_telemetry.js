//funcao send_tel eh chamada a cada 60 segundos, utiliza um for para passar em todos os canais e envia os dados de telemetria customizados (CTs/custom telemetry).
//As mensagens de telemetria chegarao nas tags CT1001 a CT1016 para as DIs e CT1101 a CT1116 para as DOs

version(1);//29/10/2024
let canais = 8; //alterar para a quantidade de canais digitais utilizados

//executa apenas na inicializacao
let setup = function() {

};

//executa em loop
let loop = function() {

};

//funcao chamada a cada X segundos
let send_tel = function() {
  for (let i = 1; i <= canais; i++) 
  {
    cloud.send_bin(1000+i, io.readDI(i));
  	cloud.send_bin(1100+i, io.readDO(i));
  }
};

timer.create(60*1000, "send_tel");


