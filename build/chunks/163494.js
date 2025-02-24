/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = String.prototype.valueOf,
  i = function(e) {
    try {
      return r.call(e), !0
    } catch (e) {
      return !1
    }
  },
  o = Object.prototype.toString,
  a = "[object String]",
  s = n(703825)();
e.exports = function(e) {
  return "string" == typeof e || "object" == typeof e && (s ? i(e) : o.call(e) === a)
}