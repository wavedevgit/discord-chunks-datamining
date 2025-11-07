/** Chunk was on web.js **/
/** chunk id: 609511, original params: e,t,n (module,exports,re quire) **/
var Chunk939793 = require("./939793.js"),
  Chunk861960 = require("./861960.js"),
  Chunk777994 = require("./777994.js"),
  Chunk326048 = require("./326048.js"),
  Chunk688709 = require("./688709.js"),
  l = "[object Boolean]",
  c = "[object Date]",
  u = "[object Map]",
  d = "[object Number]",
  f = "[object RegExp]",
  _ = "[object Set]",
  p = "[object String]",
  h = "[object Symbol]",
  m = "[object ArrayBuffer]",
  g = "[object DataView]",
  E = "[object Float32Array]",
  b = "[object Float64Array]",
  y = "[object Int8Array]",
  O = "[object Int16Array]",
  v = "[object Int32Array]",
  I = "[object Uint8Array]",
  S = "[object Uint8ClampedArray]",
  T = "[object Uint16Array]",
  A = "[object Uint32Array]";
module.exports = function(e, t, n) {
  var C = e.constructor;
  switch (t) {
    case m:
      return r(e);
    case l:
    case c:
      return new C(+e);
    case g:
      return i(e, n);
    case E:
    case b:
    case y:
    case O:
    case v:
    case I:
    case S:
    case T:
    case A:
      return s(e, n);
    case u:
      return new C;
    case d:
    case p:
      return new C(e);
    case f:
      return a(e);
    case _:
      return new C;
    case h:
      return o(e)
  }
}