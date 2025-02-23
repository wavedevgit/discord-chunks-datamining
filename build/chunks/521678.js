/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(315162),
  i = n(906024),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  a = /^\w*$/;
let s = function(e, t) {
  if ((0, r.Z)(e)) return !1;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || (0, i.Z)(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t)
}