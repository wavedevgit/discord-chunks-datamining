/** Chunk was on web.js **/
/** chunk id: 620434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk808247 = require("./808247.js"),
  Chunk594832 = require("./594832.js");

function c(e) {
  let {
    currentUser: t,
    skuId: n,
    onAddSuccess: c,
    onRemoveSuccess: u,
    onError: d
  } = e, {
    analyticsLocations: f
  } = (0, a.Ay)(), p = (0, i.bG)([o.A], () => null != t ? o.A.getFirstWishlistId(t.id) : null), _ = (0, l.rJ)(p, n), [h, m] = r.useState(null), [g, E] = r.useState(false), y = null !== h ? h : _;
  r.useEffect(() => {
    m(null), E(false)
  }, [n]);
  let b = r.useCallback(async () => {
    if (null != t && !g)
      if (E(true), y && null != p) {
        m(false);
        try {
          await s.A.removeSkuFromWishlist(p, n, f), null == u || u()
        } catch (e) {
          null == d || d(e)
        } finally {
          m(null), E(false)
        }
      } else {
        m(true);
        try {
          await s.A.addSkuToWishlist(n, f), null == c || c()
        } catch (e) {
          null == d || d(e)
        } finally {
          m(null), E(false)
        }
      }
  }, [t, g, y, p, n, f, c, u, d]);
  return {
    isWishlisted: y,
    isBusy: g,
    handleToggle: b
  }
}