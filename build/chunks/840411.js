/** Chunk was on 59569 **/
/** chunk id: 840411, original params: e,t,n (module,exports,require) **/
function r(e, t, n, r) {
  var l, i, a, o, s, c, u, d;
  let f = null,
    p = null;
  n < r ? (f = null != (l = null == (a = t[r]) ? true : a.skuId) ? l : null, p = null != (i = null == (o = t[r + 1]) ? true : o.skuId) ? i : null) : (f = null != (s = null == (u = t[r - 1]) ? true : u.skuId) ? s : null, p = null != (c = null == (d = t[r]) ? true : d.skuId) ? c : null);
  let g = [...t],
    [m] = g.splice(n, 1);
  return g.splice(r, 0, m), {
    newWishlistData: e.set("items", g),
    previousSkuId: f,
    nextSkuId: p
  }
}
require.d(exports, {
  A: () => r
}), require("./896048.js")