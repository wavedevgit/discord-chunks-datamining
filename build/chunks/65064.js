/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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
  p = "[object Set]",
  _ = "[object WeakMap]",
  h = "[object DataView]",
  m = c(r),
  g = c(i),
  E = c(o),
  v = c(a),
  b = c(s),
  y = l;
(r && y(new r(new ArrayBuffer(1))) != h || i && y(new i) != u || o && y(o.resolve()) != f || a && y(new a) != p || s && y(new s) != _) && (y = function(e) {
  var t = l(e),
    n = t == d ? e.constructor : void 0,
    r = n ? c(n) : "";
  if (r) switch (r) {
    case m:
      return h;
    case g:
      return u;
    case E:
      return f;
    case v:
      return p;
    case b:
      return _
  }
  return t
}), e.exports = y