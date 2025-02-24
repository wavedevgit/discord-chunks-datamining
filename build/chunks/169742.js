/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
  i = "undefined" == typeof globalThis ? n.g : globalThis;
e.exports = function() {
  for (var e = [], t = 0; t < r.length; t++) "function" == typeof i[r[t]] && (e[e.length] = r[t]);
  return e
}