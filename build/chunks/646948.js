/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(141603),
  i = n(735471),
  o = n(611345),
  a = n(964653),
  s = n(925768),
  l = a("IE_PROTO"),
  c = Object,
  u = c.prototype;
e.exports = s ? c.getPrototypeOf : function(e) {
  var t = o(e);
  if (r(t, l)) return t[l];
  var n = t.constructor;
  return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
}