/** Chunk was on web.js **/
/** chunk id: 583434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk55563 = require("./55563.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk981631 = require("./981631.js");
let u = 36e5;

function d(e, t) {
  let n = (0, a.e7)([o.Z], () => null != e ? o.Z.get(e) : null),
    d = null != n && n.productLine !== c.POd.COLLECTIBLES,
    [f, _, p, h] = (0, a.Wu)([l.Z], () => [l.Z.isFetchingProduct(e), l.Z.getProduct(e), l.Z.getProductFetchError(e), l.Z.getProductFetchErrorTimestamp(e)]),
    m = null != p && null != h && Date.now() - h < u,
    g = true === t && (null == _ ? true : _.type) === i.Z.BUNDLE && 0 === _.items.length;
  return (0, r.useEffect)(() => {
    null == e || null != _ && !g || d || f || m || (0, s.jr)(e, {
      includeBundles: t
    })
  }, [e, _, d, f, m, t, g]), {
    product: _,
    isFetching: f
  }
}