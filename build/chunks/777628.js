/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(726433),
  i = n(729605),
  o = n(937443).f,
  a = n(960081),
  s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  l = function(e) {
    try {
      return o(e)
    } catch (e) {
      return a(s)
    }
  };
e.exports.f = function(e) {
  return s && "Window" === r(e) ? l(e) : o(i(e))
}