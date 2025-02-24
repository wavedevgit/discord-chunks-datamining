/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(740362),
  i = n(354848),
  o = n(339718),
  a = n(883539),
  s = n(442975),
  l = a("IE_PROTO"),
  c = Object,
  u = c.prototype;
e.exports = s ? c.getPrototypeOf : function(e) {
  var t = o(e);
  if (r(t, l)) return t[l];
  var n = t.constructor;
  return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
}