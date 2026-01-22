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
  b = "[object Symbol]",
  y = "[object ArrayBuffer]",
  O = "[object DataView]",
  A = Chunk574366 ? Chunk574366.prototype : true,
  v = A ? A.valueOf : true;
module.exports = function(e, t, n, r, A, S, I) {
  switch (n) {
    case O:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case y:
      if (e.byteLength != t.byteLength || !S(new i(e), new i(t))) break;
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
      var N = I.get(e);
      if (N) return N == t;
      r |= u, I.set(e, t);
      var R = s(T(e), T(t), r, A, S, I);
      return I.delete(e), R;
    case b:
      if (v) return v.call(e) == v.call(t)
  }
  returnfalse
}