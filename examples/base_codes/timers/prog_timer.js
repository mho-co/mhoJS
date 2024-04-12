//copyright MHO LTDA: 
version(1);//04/2024

let setProgTimer = function(infos, t_h, t_m){
  if(infos.aux === 0)
  {
    infos.aux = infos.memo;
  }
  memo.writeData(infos.aux, t_h, '8');
  memo.writeData(infos.aux+1, t_m, '8');
  return infos.aux + 2; 
};

let progTimer = function(carga){
  for(let i = carga.memo; i<=(carga.qnt*4 + carga.memo); i++)
  {
    rtc.isnow_time(memo.readData(i, '8'), memo.readData(i+1, '8')) ? io.setDO(carga.dox, true) : null; //hora de ligar
    rtc.isnow_time(memo.readData(i+2, '8'), memo.readData(i+3, '8')) ? io.setDO(carga.dox, false) : null; //hora de desligar
    i = i + 4;
  }
};

//memo eh a posicao da memoria utilizada, qnt eh a quantidade de conjuntos de horarios q serao definidos, aux sempre inicia com 0
let carga1 = {dox: 1, memo: 10, qnt: 5, aux: 0};
carga1.aux = setProgTimer(carga1, 21, 03); //liga
carga1.aux = setProgTimer(carga1, 21, 04); //desliga
//...adicionar os horarios de liga e desliga em sequencia...

let carga2 = {dox: 2, memo: 15, qnt: 5, aux: 0};
carga2.aux = setProgTimer(carga2, 21, 03);
carga2.aux = setProgTimer(carga2, 21, 04);

let loop = function() {
  progTimer(carga1);
  progTimer(carga2);
  delay(1000);
};