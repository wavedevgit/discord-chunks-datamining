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
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...Chunk474936.YQ];
  return (0, Chunk442837.e7)([Chunk853872.Z, Chunk509545.Z, Chunk78839.Z], () => d(module, [Chunk853872.Z, Chunk509545.Z, Chunk78839.Z]), [module])
}

function d() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [...Chunk474936.YQ],
    [n, r, i] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [Chunk853872.Z, Chunk509545.Z, Chunk78839.Z],
    u = require.paymentSourceIds,
    d = require.defaultPaymentSourceId,
    f = Chunk442837.isLoadedForSKUs(exports),
    p = null == (e = Chunk710845.getPremiumTypeSubscription()) ? true : module.paymentSourceId;
  if (null != p && !Chunk442837.hasPaymentSourceForSKUIds(p, exports)) return c("subscription payment source ".concat(p, " not loaded for ").concat(exports)), false;
  if (null != d && !Chunk442837.hasPaymentSourceForSKUIds(d, exports)) return c("default payment source ".concat(d, " not loaded for ").concat(exports)), false;
  for (let e of u)
    if (!Chunk442837.hasPaymentSourceForSKUIds(module, exports)) return c("payment source ".concat(module, " not loaded for ").concat(exports)), false;
  return f
}