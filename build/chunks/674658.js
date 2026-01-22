/** Chunk was on web.js **/
/** chunk id: 674658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk417597 = require("./417597.js"),
  Chunk67480 = require("./67480.js"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk652215 = require("./652215.js");
let u = 36e5;

function d(e, t) {
  let n = (0, a.bG)([s.A], () => null != e ? s.A.get(e) : null),
    d = null != n && n.productLine !== c.EZt.COLLECTIBLES,
    [f, p, _, h] = (0, a.yK)([l.A], () => [l.A.isFetchingProduct(e), l.A.getProduct(e), l.A.getProductFetchError(e), l.A.getProductFetchErrorTimestamp(e)]),
    m = null != _ && null != h && Date.now() - h < u,
    g = true === t && (null == p ? true : p.type) === i.R.BUNDLE && 0 === p.items.length;
  return (0, r.useEffect)(() => {
    null == e || null != p && !g || d || f || m || (0, o.Jp)(e, {
      includeBundles: t
    })
  }, [e, p, d, f, m, t, g]), {
    product: p,
    isFetching: f
  }
}