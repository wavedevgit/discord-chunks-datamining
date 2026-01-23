/** Chunk was on web.js **/
/** chunk id: 369705, original params: e,t,n (module,exports,re quire) **/
var Chunk574366 = require("./574366.js"),
  Chunk910867 = require("./910867.js"),
  Chunk31289 = require("./31289.js"),
  Chunk381138 = require("./381138.js"),
  Chunk118322 = require("./118322.js"),
  Chunk762760 = require("./762760.js"),
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
  v = Chunk574366 ? Chunk574366.prototype : true,
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
      var R = s(T(e), T(t), r, v, I, S);
      return S.delete(e), R;
    case y:
      if (A) return A.call(e) == A.call(t)
  }
  returnfalse
}