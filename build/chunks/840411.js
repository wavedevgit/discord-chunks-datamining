/** Chunk was on 38663 **/
/** chunk id: 840411, original params: e,t,n (module,exports,require) **/
function r(e, t, n, r) {
  var l, i, a, s, o, c, u, d;
  let f = null,
    p = null;
  n < r ? (f = null != (l = null == (a = t[r]) ? true : a.skuId) ? l : null, p = null != (i = null == (s = t[r + 1]) ? true : s.skuId) ? i : null) : (f = null != (o = null == (u = t[r - 1]) ? true : u.skuId) ? o : null, p = null != (c = null == (d = t[r]) ? true : d.skuId) ? c : null);
  let b = [...t],
    [g] = b.splice(n, 1);
  return b.splice(r, 0, g), {
    newWishlistData: e.set("items", b),
    previousSkuId: f,
    nextSkuId: p
  }
}
require.d(exports, {
  A: () => r
}), require("./896048.js")