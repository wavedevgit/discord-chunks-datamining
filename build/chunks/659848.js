/** Chunk was on web.js **/
/** chunk id: 659848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk711959 = require("./711959.js"),
  Chunk526056 = require("./526056.js"),
  Chunk877820 = require("./877820.js");

function l(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.currentOrderId),
    l = a.Z.useExperiment({
      location: "payment_modal"
    }).enabled;
  (0, r.useEffect)(() => {
    l && null != n && (0, o.C)({
      orderId: n,
      updates: {
        paymentSourceId: t
      }
    })
  }, [e, t, l]), (0, r.useEffect)(() => {
    l && null == n && null != e && null != t && (0, o.L)({
      skuId: e,
      paymentSourceId: t
    })
  }, [n, e, t, l])
}