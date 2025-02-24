/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var t = Object.prototype.toString;
e.exports = function(e) {
  var n = t.call(e),
    r = "[object Arguments]" === n;
  return r || (r = "[object Array]" !== n && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), r
}