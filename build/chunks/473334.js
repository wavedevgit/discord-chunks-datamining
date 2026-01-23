/** Chunk was on web.js **/
/** chunk id: 473334, original params: e,t,n (module,exports,re quire) **/
var Chunk50613 = require("./50613.js"),
  Chunk742904 = require("./742904.js"),
  Chunk416412 = require("./416412.js"),
  Chunk822339 = require("./822339.js"),
  Chunk109665 = require("./109665.js"),
  Chunk514035 = require("./514035.js"),
  c = 1,
  u = 2,
  d = "[object Boolean]",
  f = "[object Date]",
  p = "[object Error]",
  _ = "[object Map]",
  h = "[object Number]",
  m = "[object RegExp]",
  g = "[object Set]",
  E = "[object String]",
  y = "[object Symbol]",
  b = "[object ArrayBuffer]",
  O = "[object DataView]",
  v = Chunk50613 ? Chunk50613.prototype : true,
  A = v ? v.valueOf : true;
module.exports = function(e, t, n, r, v, I, S) {
  switch (n) {
    case O:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case b:
      if (e.byteLength != t.byteLength || !I(new i(e), new i(t))) break;
      returntrue;
    case d:
    case f:
    case h:
      return a(+e, +t);
    case p:
      return e.name == t.name && e.message == t.message;
    case m:
    case E:
      return e == t + "";
    case _:
      var T = o;
    case g:
      var C = r & c;
      if (T || (T = l), e.size != t.size && !C) break;
      var N = S.get(e);
      if (N) return N == t;
      r |= u, S.set(e, t);
      var w = s(T(e), T(t), r, v, I, S);
      return S.delete(e), w;
    case y:
      if (A) return A.call(e) == A.call(t)
  }
  returnfalse
}