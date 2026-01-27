/** Chunk was on web.js **/
/** chunk id: 110259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  AnalyticsActionHandlers: () => c.q,
  ImpressionGroups: () => u.q,
  ImpressionNames: () => d.I,
  ImpressionTypes: () => u.z,
  NetworkActionNames: () => d.D,
  analyticsTrackingStoreMaker: () => c.b,
  encodeProperties: () => l.q,
  extendSuperProperties: () => f.Fy,
  getCampaignParams: () => f.Pg,
  getDevice: () => f.Pf,
  getOS: () => f.R0,
  getSuperProperties: () => f.BV,
  getSuperPropertiesBase64: () => f.sv,
  isThrottled: () => h,
  trackMaker: () => m
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk753912 = require("./753912.js"),
  Chunk368849 = require("./368849.js"),
  Chunk502518 = require("./502518.js"),
  Chunk412728 = require("./412728.js"),
  Chunk239947 = require("./239947.js"),
  Chunk798566 = require("./798566.js");
let p = {},
  _ = {};

function h(e) {
  return null != p[e] && p[e] > Date.now()
}
let m = e => {
  let {
    analyticEventConfigs: t,
    dispatcher: r,
    TRACK_ACTION_NAME: a
  } = e, l = (0, s.x)(r, a);
  return function(e, r) {
    let a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    if (null != n.g.isServerRendering && true === n.g.isServerRendering) return Promise.resolve();
    let s = null != r ? r : {},
      c = t[e];
    if ("function" == typeof c) {
      var u;
      c = null != (u = c(s)) ? u : null
    }
    if (null != c)
      if ("throttlePeriod" in c) {
        let t = [e, ...c.throttleKeys(s)].join("_");
        if (h(t) || "number" == typeof c.throttlePercent && Math.random() > c.throttlePercent) return Promise.resolve();
        if (c.deduplicate) {
          let e = _[t];
          if (i()(e, s)) return Promise.resolve();
          _[t] = s
        }
        p[t] = Date.now() + c.throttlePeriod
      } else if ("throttlePercent" in c) {
      if (Math.random() > c.throttlePercent) return Promise.resolve()
    } else o()(false, "Unsupported analytics event config: ".concat(c));
    return l(e, r, a)
  }
}