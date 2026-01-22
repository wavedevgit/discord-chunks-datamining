/** Chunk was on web.js **/
/** chunk id: 89366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QQ: () => c,
  Us: () => u,
  qD: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk378135 = require("./378135.js"),
  Chunk788868 = require("./788868.js");
let c = () => {
  let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription());
  return !!(null == e ? true : e.hasActiveTrial)
};

function u() {
  let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
    t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
  return (null == e ? true : e.hasActiveTrial) ? null == t ? true : t.premiumType : null
}

function d() {
  return l.MB.map(e => s.A.getUserTrialOffer(e)).filter(e => null != e && !(0, o.P)(e)).shift()
}