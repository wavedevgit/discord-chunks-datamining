/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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
  p = "[object Number]",
  _ = "[object Object]",
  h = "[object RegExp]",
  m = "[object Set]",
  g = "[object String]",
  E = "[object WeakMap]",
  v = "[object ArrayBuffer]",
  b = "[object DataView]",
  y = "[object Float64Array]",
  O = "[object Int8Array]",
  S = "[object Int16Array]",
  I = "[object Int32Array]",
  T = "[object Uint8Array]",
  N = "[object Uint8ClampedArray]",
  A = "[object Uint16Array]",
  C = "[object Uint32Array]",
  R = {};

function P(e) {
  return o(e) && i(e.length) && !!R[r(e)]
}
R["[object Float32Array]"] = R[y] = R[O] = R[S] = R[I] = R[T] = R[N] = R[A] = R[C] = !0, R[a] = R[s] = R[v] = R[l] = R[b] = R[c] = R[u] = R[d] = R[f] = R[p] = R[_] = R[h] = R[m] = R[g] = R[E] = !1, e.exports = P