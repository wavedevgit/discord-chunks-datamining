/** Chunk was on 49941 **/
/** chunk id: 474930, original params: e,t,n (module,exports,require) **/
function r(e, t, n, r) {
  var i, l, a, o, s, c, u, d;
  let f = null,
    g = null;
  n < r ? (f = null != (a = null == (i = t[r]) ? true : i.skuId) ? a : null, g = null != (o = null == (l = t[r + 1]) ? true : l.skuId) ? o : null) : (f = null != (u = null == (s = t[r - 1]) ? true : s.skuId) ? u : null, g = null != (d = null == (c = t[r]) ? true : c.skuId) ? d : null);
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