//copyright MHO LTDA: 
version(1);//04/2024

//digital output, tempo on, tempo off. (segundos)
let periodicTimer = function(dox, t_on, t_off){ 
  io.do_lastchange(dox, true)/1000 > t_on ? io.setDO(dox, false) : null;
  io.do_lastchange(dox, false)/1000 > t_off ? io.setDO(dox, true): null;
};

let loop = function() {
  periodicTimer(1, 5, 10);
};