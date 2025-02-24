/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = Object.prototype.toString;
if (n(322499)()) {
  var i = Symbol.prototype.toString,
    o = /^Symbol\(.*\)$/,
    a = function(e) {
      return "symbol" == typeof e.valueOf() && o.test(i.call(e))
    };
  e.exports = function(e) {
    if ("symbol" == typeof e) return !0;
    if ("[object Symbol]" !== r.call(e)) return !1;
    try {
      return a(e)
    } catch (e) {
      return !1
    }
  }
} else e.exports = function(e) {
  return !1
}