/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = Date.prototype.getDay,
  i = function(e) {
    try {
      return r.call(e), !0
    } catch (e) {
      return !1
    }
  },
  o = Object.prototype.toString,
  a = "[object Date]",
  s = n(703825)();
e.exports = function(e) {
  return "object" == typeof e && null !== e && (s ? i(e) : o.call(e) === a)
}