/** Chunk was on web.js **/
var r = n(754675),
  i = n(39493),
  o = n(855543),
  a = n(143866),
  s = n(142670),
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
  v = "[object Float64Array]",
  b = "[object Int8Array]",
  y = "[object Int16Array]",
  O = "[object Int32Array]",
  I = "[object Uint8Array]",
  S = "[object Uint8ClampedArray]",
  T = "[object Uint16Array]",
  N = "[object Uint32Array]";

function A(e, t, n) {
  var A = e.constructor;
  switch (t) {
    case m:
      return r(e);
    case l:
    case c:
      return new A(+e);
    case g:
      return i(e, n);
    case E:
    case v:
    case b:
    case y:
    case O:
    case I:
    case S:
    case T:
    case N:
      return s(e, n);
    case u:
      return new A;
    case d:
    case p:
      return new A(e);
    case f:
      return o(e);
    case _:
      return new A;
    case h:
      return a(e)
  }
}
e.exports = A