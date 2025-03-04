/** Chunk was on web.js **/
var r = n(135839),
  i = n(117973),
  o = n(780712),
  a = n(400353),
  s = n(653180),
  l = n(657398),
  c = n(19235),
  u = "[object Map]",
  d = "[object Object]",
  f = "[object Promise]",
  _ = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  g = c(r),
  m = c(i),
  E = c(o),
  v = c(a),
  b = c(s),
  y = l;
(r && y(new r(new ArrayBuffer(1))) != h || i && y(new i) != u || o && y(o.resolve()) != f || a && y(new a) != _ || s && y(new s) != p) && (y = function(e) {
  var t = l(e),
    n = t == d ? e.constructor : void 0,
    r = n ? c(n) : "";
  if (r) switch (r) {
    case g:
      return h;
    case m:
      return u;
    case E:
      return f;
    case v:
      return _;
    case b:
      return p
  }
  return t
}), e.exports = y