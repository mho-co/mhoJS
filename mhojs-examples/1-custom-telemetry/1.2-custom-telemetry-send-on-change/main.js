
//leitura de enum via modbus e envio por telemetria customizada (CT1) a cada 10 minutos ou sempre que houver mudança de valor

version(1);//20/09/2025

let ultimo = -1; //inicializar com um valor invalido

let setup = function() {
  // Nenhuma inicializacao especial necessaria
};

let enviar_telemetria = function() {
  let atual = mbc.MI(1);
  if (atual !== ultimo) {
    if(cloud.send_int(1, atual)) {
      ultimo = atual;
    }
  }
};

let loop = function() {
  enviar_telemetria();
};

let send_tel = function() {
  let atual = mbc.MI(1);
  if(cloud.send_int(1, atual)) {
    ultimo = atual;
  }
 };

timer.create(600*1000, "send_tel"); //a cada 10 minutos (600 segundos)