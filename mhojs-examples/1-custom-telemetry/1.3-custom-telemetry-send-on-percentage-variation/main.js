//leitura de valor via entrada analogica (AI1) e envio por telemetria customizada (CT2) a cada X minutos ou instantaneamente se variar mais de Y%
version(1);//20/09/2025

let ultimo_valor = -1; //inicializar com valor invalido
let variacao_minima = 50; // em porcentagem. Exemplo: 50 = 50% (por exemplo se a leitura anterior estava em 20, para uma disparar uma telemetria por variacao brusca o valor atual teria que ser menor que 10 ou maior que 30)
//nao recomendado valores baixos para variacao_minima, pois pode disparar muitas telemetrias por variacao brusca

let setup = function() {

};

//funcao generica para verificar se o valor variou mais que o percentual passado
let variou_percentual = function(atual, anterior, percentual) {
  let variacao = atual - anterior;
  if (variacao < 0) {
    variacao = -1*variacao;
  }
  if (anterior > 0) {
    let variou = (variacao / anterior) * 100;
    if (variou > percentual) {
      return true;
    }
  }
  return false;
};

//funcao chamada a cada ciclo de processamento do loop
let enviar_ai = function() {
  let atual = io.readAI(1, 'i', 0, 100);
  if (variou_percentual(atual, ultimo_valor, variacao_minima)) {
    if (cloud.send_double(2, atual)) {
      ultimo_valor = atual;
      return true;
    }
  }
  return false;
};

let loop = function() {
  enviar_ai();
};

//funcao chamada a cada X segundos
let send_tel = function() {
  let atual = io.readAI(1, 'i', 0, 100);
  if (cloud.send_double(2, atual)) {
    ultimo_valor = atual;
  }
};

timer.create(600*1000, "send_tel"); //a cada 10 minutos (600 segundos)