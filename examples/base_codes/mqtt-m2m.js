//copyright MHO LTDA: 
version(1);//26/02/2024
let myRemoteVar = false;

//this function is called on every connection event
//essa funcao eh chamada sempre que um evento de conexao eh realizada
let mqtt_subscribe = function(topic, payload) {
  if(!cloud.sub('mho/keeper/v1/mydevice1/telemetry')) return false;
  if(!cloud.sub('mho/keeper/v1/mydevice1/telemetry')) return false;
  return true;
};

//this function is called whenever a MQTT message arrives at the custom topic
//essa funcao eh chamada sempre que chega uma mensagem via mqtt de um topico customizado
let mqtt_callback = function(topic, payload) {
  log("topic:", topic, "payload:", payload);
  let mykey = payload.teste;
  myRemoteVar = payload.DI1;
  io.setDO(1, myRemoteVar);
};