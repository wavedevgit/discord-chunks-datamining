/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(740362),
  i = n(666061),
  o = n(347722),
  a = n(97131);
e.exports = function(e, t, n) {
  for (var s = i(t), l = a.f, c = o.f, u = 0; u < s.length; u++) {
    var d = s[u];
    r(e, d) || n && r(n, d) || l(e, d, c(t, d))
  }
}