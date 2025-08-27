/** Chunk was on web.js **/
/** chunk id: 267097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk580747 = require("./580747.js"),
  Chunk479801 = require("./479801.js");

function a(e, t) {
  let n = null == e ? true : e.paymentGateway,
    a = (0, r.Z)("shop_disable_cache"),
    o = (0, r.Z)("shop_include_unpublished");
  return (0, i.e)({
    noCache: a,
    includeUnpublished: o,
    paymentGateway: n,
    includeBundles: true,
    logPerf: null == e ? true : e.logPerf
  }, true, t)
}