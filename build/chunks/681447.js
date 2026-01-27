/** Chunk was on web.js **/
/** chunk id: 681447, original params: e,t,n (module,exports,re quire) **/
var Chunk646344 = require("./646344.js"),
  Chunk305327 = require("./305327.js"),
  a = 0 / 0,
  o = /^\s+|\s+$/g,
  s = /^[-+]0x[0-9a-f]+$/i,
  l = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  u = parseInt;
module.exports = function(e) {
  if ("number" == typeof e) return e;
  if (i(e)) return a;
  if (r(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = r(t) ? t + "" : t
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(o, "");
  var n = l.test(e);
  return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e
}