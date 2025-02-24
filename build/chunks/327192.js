/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(273511),
  i = n(735471),
  o = n(726433),
  a = n(360518)("toStringTag"),
  s = Object,
  l = "Arguments" === o(function() {
    return arguments
  }()),
  c = function(e, t) {
    try {
      return e[t]
    } catch (e) {}
  };
e.exports = r ? o : function(e) {
  var t, n, r;
  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = c(t = s(e), a)) ? n : l ? o(t) : "Object" === (r = o(t)) && i(t.callee) ? "Arguments" : r
}