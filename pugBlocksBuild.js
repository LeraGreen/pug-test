'use strict';

const fs = require('fs');
const src = 'src/';
let file;
let fileMixins = [];

let pugFiles = fs.readdirSync(src, 'utf8').filter(function(item) {
  if(/.+\.pug$/.test(item)) return true;
  else return false;
});

pugFiles.forEach(function(item, i) {
  file = fs.readFileSync(src + item, 'utf8');
  fileMixins = file.split('\n').filter(function(item) {
    if(/[\n\s]\+/.test(item)) return true;
    else return false;
  });
  console.log(fileMixins);
});




// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}