/** Chunk was on web.js **/
/** chunk id: 995542, original params: e,t,n (module,exports,re quire) **/
var Chunk56135 = require("./56135.js"),
  Chunk888968 = require("./888968.js"),
  Chunk649786 = require("./649786.js"),
  Chunk718332 = require("./718332.js"),
  Chunk320114 = require("./320114.js"),
  Chunk82075 = require("./82075.js"),
  c = 1,
  u = 2,
  d = "[object Boolean]",
  f = "[object Date]",
  _ = "[object Error]",
  p = "[object Map]",
  h = "[object Number]",
  m = "[object RegExp]",
  g = "[object Set]",
  E = "[object String]",
  b = "[object Symbol]",
  y = "[object ArrayBuffer]",
  O = "[object DataView]",
  v = Chunk56135 ? Chunk56135.prototype : true,
  I = v ? v.valueOf : true;
module.exports = function(e, t, n, r, v, T, S) {
  switch (n) {
    case O:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case y:
      if (e.byteLength != t.byteLength || !T(new i(e), new i(t))) break;
      returntrue;
    case d:
    case f:
    case h:
      return a(+e, +t);
    case _:
      return e.name == t.name && e.message == t.message;
    case m:
    case E:
      return e == t + "";
    case p:
      var A = s;
    case g:
      var C = r & c;
      if (A || (A = l), e.size != t.size && !C) break;
      var N = S.get(e);
      if (N) return N == t;
      r |= u, S.set(e, t);
      var R = o(A(e), A(t), r, v, T, S);
      return S.delete(e), R;
    case b:
      if (I) return I.call(e) == I.call(t)
  }
  returnfalse
}