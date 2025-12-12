/** Chunk was on web.js **/
/** chunk id: 392919, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js");

function i(e) {
  var t = e.length;
  if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && r(false), "number" != typeof t && r(false), 0 === t || t - 1 in e || r(false), "function" == typeof e.callee && r(false), e.hasOwnProperty) try {
    return Array.prototype.slice.call(e)
  } catch (e) {}
  for (var n = Array(t), i = 0; i < t; i++) n[i] = e[i];
  return n
}

function o(e) {
  return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
}
module.exports = function(e) {
  return o(e) ? Array.isArray(e) ? e.slice() : i(e) : [e]
}