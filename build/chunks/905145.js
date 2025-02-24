/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(581031),
  i = Error,
  o = r("".replace),
  a = function(e) {
    return String(i(e).stack)
  }("zxcasd"),
  s = /\n\s*at [^:]*:[^\n]*/,
  l = s.test(a);
e.exports = function(e, t) {
  if (l && "string" == typeof e && !i.prepareStackTrace)
    for (; t--;) e = o(e, s, "");
  return e
}