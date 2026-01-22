/** Chunk was on web.js **/
/** chunk id: 315949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk354328 = require("./354328.js"),
  Chunk747198 = require("./747198.js");

function a(e, t) {
  let n = null == e ? true : e.paymentGateway,
    a = (0, r.A)("shop_disable_cache"),
    s = (0, r.A)("shop_include_unpublished");
  return (0, i.i)({
    noCache: a,
    includeUnpublished: s,
    paymentGateway: n,
    includeBundles: true,
    logPerf: null == e ? true : e.logPerf
  }, true, t)
}