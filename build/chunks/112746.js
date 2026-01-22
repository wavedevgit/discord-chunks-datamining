/** Chunk was on web.js **/
/** chunk id: 112746, original params: e,t,n (module,exports,re quire) **/
var Chunk212 = require("./212.js"),
  Chunk509185 = require("./509185.js"),
  Chunk168110 = require("./168110.js"),
  s = 0 / 0,
  o = /^[-+]0x[0-9a-f]+$/i,
  l = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  u = parseInt;
module.exports = function(e) {
  if ("number" == typeof e) return e;
  if (a(e)) return s;
  if (i(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = i(t) ? t + "" : t
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = r(e);
  var n = l.test(e);
  return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e
}