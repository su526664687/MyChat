function appendZero(obj) {
  if(obj < 10) {
    return "0" + obj;
  } else {
    return obj;
  }
}

function getLocalHMS() {
  var time = (new Date()).getTime();
  var date = new Date();
  var hms = appendZero(date.getHours()) + ":" + appendZero(date.getMinutes()) + ":" +
      appendZero(date.getSeconds());
  return hms;
}

function getStringLength(str) {
  return str.replace(/[^\u0000-\u00ff]/g,"tt").length;
}