/** Chunk was on web.js **/
var r = n(903425),
  i = n(720815),
  o = n(533206),
  a = "[object Arguments]",
  s = "[object Array]",
  l = "[object Boolean]",
  c = "[object Date]",
  u = "[object Error]",
  d = "[object Function]",
  f = "[object Map]",
  _ = "[object Number]",
  p = "[object Object]",
  h = "[object RegExp]",
  m = "[object Set]",
  g = "[object String]",
  E = "[object WeakMap]",
  v = "[object ArrayBuffer]",
  b = "[object DataView]",
  y = "[object Float64Array]",
  O = "[object Int8Array]",
  I = "[object Int16Array]",
  S = "[object Int32Array]",
  T = "[object Uint8Array]",
  N = "[object Uint8ClampedArray]",
  A = "[object Uint16Array]",
  C = "[object Uint32Array]",
  R = {};

function P(e) {
  return o(e) && i(e.length) && !!R[r(e)]
}
R["[object Float32Array]"] = R[y] = R[O] = R[I] = R[S] = R[T] = R[N] = R[A] = R[C] = !0, R[a] = R[s] = R[v] = R[l] = R[b] = R[c] = R[u] = R[d] = R[f] = R[_] = R[p] = R[h] = R[m] = R[g] = R[E] = !1, e.exports = P