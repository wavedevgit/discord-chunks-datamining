/** Chunk was on web.js **/
/** chunk id: 26508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qs: () => l,
  T0: () => s,
  mY: () => c
});
var Chunk84483 = require("./84483.js"),
  Chunk287809 = require("./287809.js"),
  Chunk474090 = require("./474090.js"),
  Chunk788868 = require("./788868.js");

function s() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
    {
      isInTreatment: t
    } = (0, r.v9)(e);
  return t
}

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "ProgramRewardsUtils",
    {
      isInTreatment: t
    } = (0, r.uX)(e);
  return t
}

function c(e) {
  let t = null != e ? e : i.default.getCurrentUser();
  return (0, a.YE)(t, o.PremiumTypes.TIER_2)
}