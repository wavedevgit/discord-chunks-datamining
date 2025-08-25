/** Chunk was on web.js **/
/** chunk id: 583434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk55563 = require("./55563.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk981631 = require("./981631.js");
let c = 36e5;

function u(e) {
  let t = (0, i.e7)([o.Z], () => null != e ? o.Z.get(e) : null),
    n = null != t && t.productLine !== l.POd.COLLECTIBLES,
    [u, d, f, _] = (0, i.Wu)([s.Z], () => [s.Z.isFetchingProduct(e), s.Z.getProduct(e), s.Z.getProductFetchError(e), s.Z.getProductFetchErrorTimestamp(e)]),
    p = null != f && null != _ && Date.now() - _ < c;
  return (0, r.useEffect)(() => {
    null == e || null != d || n || u || p || (0, a.jr)(e)
  }, [e, d, n, u, p]), {
    product: d,
    isFetching: u
  }
}