/** Chunk was on web.js **/
/** chunk id: 15640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u,
  a: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk710845 = require("./710845.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk474936 = require("./474936.js");
new Chunk710845.Z("useSubscriptionPlansLoaded");
let c = e => {};

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...l.YQ];
  return (0, r.e7)([a.Z, o.Z, s.Z], () => d(e, [a.Z, o.Z, s.Z]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...l.YQ],
    [n, r, i] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Z, o.Z, s.Z],
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