version(1);//03/10/2024
//utilizamos as memorias retentivas 1 a 16 para guardar a informacao de ultimo status

let topic_customSetDO = 'mho/keeper/v1/mydevice1/customSetDO'; //payload: {"setDO": 1, "value": true}

//funcao padrao do keeper que se inscreve no topico de interesse
let mqtt_subscribe = function() {
  if(!cloud.sub(topic_customSetDO)) return false;
  return true;
};

//essa funcao eh chamada sempre que chega uma mensagem via mqtt de um topico customizado
let mqtt_callback = function(topic, payload) {
  log("topic:", topic, "payload:", payload);
  if(topic === topic_customSetDO)
  {
  	log('setDO => ', payload.setDO);
  	log('value => ', payload.value);
  	payload.value ? memo.writeData(payload.setDO, 1, '8') : memo.writeData(payload.setDO, 0, '8');
  	io.setDO(payload.setDO, payload.value);
  }
};

//funcao padrao do keeper que eh chamada apenas um vez na incializacao do programa
let setup = function() {
  delay(5000); //delay para caso haja quedas de energia seguidas
  for (let i = 1; i <= 16; i++) {
     let status = memo.readData(i, '8');
     io.setDO(i, status); //retorna para ultimo status
     if(status)
     {
        delay(2000);//delay para nao ligar todas as cargas de uma vez
     }
  }
};

//funcao padrao do keeper que eh chamada repetidamente
let loop = function() {
  
};