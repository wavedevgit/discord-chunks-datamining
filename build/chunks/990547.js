/** Chunk was on web.js **/
/** chunk id: 990547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  AnalyticsActionHandlers: () => c.X,
  ImpressionGroups: () => u.A,
  ImpressionNames: () => d.z,
  ImpressionTypes: () => u.n,
  NetworkActionNames: () => d.a,
  analyticsTrackingStoreMaker: () => c.l,
  encodeProperties: () => l.Z,
  extendSuperProperties: () => f.fb,
  getCampaignParams: () => f.fU,
  getDevice: () => f._v,
  getOS: () => f.Ij,
  getSuperProperties: () => f.SL,
  getSuperPropertiesBase64: () => f.pJ,
  isThrottled: () => h,
  trackMaker: () => m
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk979675 = require("./979675.js"),
  Chunk947486 = require("./947486.js"),
  Chunk699407 = require("./699407.js"),
  Chunk20281 = require("./20281.js"),
  Chunk525769 = require("./525769.js"),
  Chunk753859 = require("./753859.js");
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
  } = e, l = (0, s.$)(r, a);
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