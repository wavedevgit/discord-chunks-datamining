/** Chunk was on 65414 **/
/** chunk id: 474930, original params: e,t,n (module,exports,require) **/
function r(e, t, n, r) {
  var i, l, a, o, c, s, u, d;
  let f = null,
    g = null;
  n < r ? (f = null != (a = null == (i = t[r]) ? true : i.skuId) ? a : null, g = null != (o = null == (l = t[r + 1]) ? true : l.skuId) ? o : null) : (f = null != (u = null == (c = t[r - 1]) ? true : c.skuId) ? u : null, g = null != (d = null == (s = t[r]) ? true : s.skuId) ? d : null);
  let p = [...t],
    [m] = p.splice(n, 1);
  return p.splice(r, 0, m), {
    newWishlistData: e.set("items", p),
    previousSkuId: f,
    nextSkuId: g
  }
}
require.d(exports, {
  d: () => r
}), require("./388685.js")