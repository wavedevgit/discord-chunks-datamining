/** Chunk was on web.js **/
/** chunk id: 575473, original params: e,t,n (module,exports,re quire) **/
var Chunk466293 = require("./466293.js"),
  Chunk139069 = require("./139069.js"),
  Chunk703284 = require("./703284.js"),
  Chunk501979 = require("./501979.js"),
  Chunk98368 = require("./98368.js"),
  Chunk433005 = require("./433005.js"),
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
  v = Chunk466293 ? Chunk466293.prototype : true,
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