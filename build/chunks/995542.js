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
  p = "[object Error]",
  _ = "[object Map]",
  m = "[object Number]",
  h = "[object RegExp]",
  g = "[object Set]",
  E = "[object String]",
  b = "[object Symbol]",
  y = "[object ArrayBuffer]",
  O = "[object DataView]",
  v = Chunk56135 ? Chunk56135.prototype : true,
  S = v ? v.valueOf : true;
module.exports = function(e, t, n, r, v, I, T) {
  switch (n) {
    case O:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case y:
      if (e.byteLength != t.byteLength || !I(new i(e), new i(t))) break;
      returntrue;
    case d:
    case f:
    case m:
      return a(+e, +t);
    case p:
      return e.name == t.name && e.message == t.message;
    case h:
    case E:
      return e == t + "";
    case _:
      var C = s;
    case g:
      var A = r & c;
      if (C || (C = l), e.size != t.size && !A) break;
      var N = T.get(e);
      if (N) return N == t;
      r |= u, T.set(e, t);
      var P = o(C(e), C(t), r, v, I, T);
      return T.delete(e), P;
    case b:
      if (S) return S.call(e) == S.call(t)
  }
  returnfalse
}