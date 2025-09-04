/** Chunk was on web.js **/
/** chunk id: 354199, original params: e,t,n (module,exports,re quire) **/
var Chunk754675 = require("./754675.js"),
  Chunk39493 = require("./39493.js"),
  Chunk855543 = require("./855543.js"),
  Chunk143866 = require("./143866.js"),
  Chunk142670 = require("./142670.js"),
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
  T = "[object Uint8ClampedArray]",
  S = "[object Uint16Array]",
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
    case T:
    case S:
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