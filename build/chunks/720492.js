/** Chunk was on web.js **/
/** chunk id: 720492, original params: e,t,n (module,exports,re quire) **/
var Chunk775078 = require("./775078.js"),
  Chunk69204 = require("./69204.js"),
  Chunk42344 = require("./42344.js"),
  Chunk322345 = require("./322345.js"),
  Chunk745196 = require("./745196.js"),
  l = "[object Boolean]",
  c = "[object Date]",
  u = "[object Map]",
  d = "[object Number]",
  f = "[object RegExp]",
  p = "[object Set]",
  _ = "[object String]",
  h = "[object Symbol]",
  m = "[object ArrayBuffer]",
  g = "[object DataView]",
  E = "[object Float32Array]",
  b = "[object Float64Array]",
  y = "[object Int8Array]",
  O = "[object Int16Array]",
  A = "[object Int32Array]",
  v = "[object Uint8Array]",
  S = "[object Uint8ClampedArray]",
  I = "[object Uint16Array]",
  T = "[object Uint32Array]";
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
    case A:
    case v:
    case S:
    case I:
    case T:
      return o(e, n);
    case u:
      return new C;
    case d:
    case _:
      return new C(e);
    case f:
      return a(e);
    case p:
      return new C;
    case h:
      return s(e)
  }
}