/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(957578).Buffer;
e.exports = function(e, t, n) {
  if (r.isBuffer(e)) return e;
  if ("string" == typeof e) return r.from(e, t);
  if (ArrayBuffer.isView(e)) return r.from(e.buffer);
  throw TypeError(n + " must be a string, a Buffer, a typed array or a DataView")
}