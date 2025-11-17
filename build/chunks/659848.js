/** Chunk was on web.js **/
/** chunk id: 659848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk711959 = require("./711959.js"),
  Chunk526056 = require("./526056.js"),
  Chunk877820 = require("./877820.js");

function l(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.currentOrderId),
    l = o.Z.useExperiment({
      location: "payment_modal"
    }).enabled;
  (0, r.useEffect)(() => {
    l && null != n && (0, a.C)({
      orderId: n,
      updates: {
        paymentSourceId: t
      }
    })
  }, [e, t, l]), (0, r.useEffect)(() => {
    l && null == n && null != e && null != t && (0, a.L)({
      skuId: e,
      paymentSourceId: t
    })
  }, [n, e, t, l])
}