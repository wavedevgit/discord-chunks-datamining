/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.r(t), n.d(t, {
  default: () => a
});
var r = n(528734),
  i = n(951516);

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function a(e) {
  var t, n;
  if ((0, i.Z)(1, arguments), e && "function" == typeof e.forEach) t = e;
  else {
    if ("object" !== o(e) || null === e) return new Date(NaN);
    t = Array.prototype.slice.call(e)
  }
  return t.forEach(function(e) {
    var t = (0, r.default)(e);
    (void 0 === n || n < t || isNaN(Number(t))) && (n = t)
  }), n || new Date(NaN)
}