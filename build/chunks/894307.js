/** Chunk was on 23628 **/
/** chunk id: 894307, original params: e,t,n (module,exports,require) **/
function r(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function l(e, t, n) {
  return n.left + e / t * n.width
}

function o(e) {
  let t = 0 | e,
    n = Math.floor(t / 3600),
    r = Math.floor(t % 3600 / 60),
    l = t % 60;
  return n > 0 ? "".concat(n, ":").concat(String(r).padStart(2, "0"), ":").concat(String(l).padStart(2, "0")) : "".concat(r, ":").concat(String(l).padStart(2, "0"))
}
require.d(exports, {
  DX: () => l,
  hc: () => r,
  rB: () => o
})