/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(680500),
  i = n(24033),
  o = n(340618);
e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = !1,
    n = {};
  try {
    (e = r(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
  } catch (e) {}
  return function(n, r) {
    return i(n), o(r), t ? e(n, r) : n.__proto__ = r, n
  }
}() : void 0)