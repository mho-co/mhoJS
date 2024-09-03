//library cfw500 

let map_cfw500 = { 
  info: {"version": 1},
  changeSpeed: function(obj, speed_hz) {
    let setSpeed = speed_hz*8192/obj.hz;
    setSpeed < 0 : setSpeed = 0: null;
    setSpeed > 8192 : setSpeed = 8192: null;
    mbc.wMI(obj.wmi_speed, setSpeed);
  },
  faultClear: function(obj) {
      mbc.wMB(obj.wmb_fault, true);
      delay(1000);
      mbc.wMB(obj.wmb_fault, false);
  },
  control: function(obj, value) {
      mbc.wMB(obj.wmb_run, value);
      mbc.wMB(obj.wmb_en, true);
  }
};
