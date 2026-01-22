/** Chunk was on web.js **/
/** chunk id: 160946, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d,
  Y: () => u
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk626584 = require("./626584.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk788868 = require("./788868.js");
new Chunk626584.A("useSubscriptionPlansLoaded");
let c = e => {};

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...l.oz];
  return (0, r.bG)([a.A, s.A, o.A], () => d(e, [a.A, s.A, o.A]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...l.oz],
    [n, r, i] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, s.A, o.A],
    u = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = r.isLoadedForSKUs(t),
    p = null == (e = i.getPremiumTypeSubscription()) ? true : e.paymentSourceId;
  if (null != p && !r.hasPaymentSourceForSKUIds(p, t)) return c("subscription payment source ".concat(p, " not loaded for ").concat(t)), false;
  if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return c("default payment source ".concat(d, " not loaded for ").concat(t)), false;
  for (let e of u)
    if (!r.hasPaymentSourceForSKUIds(e, t)) return c("payment source ".concat(e, " not loaded for ").concat(t)), false;
  return f
}