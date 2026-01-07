/** Chunk was on web.js **/
/** chunk id: 814076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk742280 = require("./742280.js"),
  Chunk442837 = require("./442837.js"),
  Chunk351402 = require("./351402.js");

function s() {
  let [e, t] = r.useState(false), [n, s] = r.useState(false), l = (0, a.e7)([o.Z], () => i.M.EEA_COUNTRIES.has(o.Z.ipCountryCodeWithFallback));
  return {
    hasViewedPurchaseTerms: e,
    setHasViewedPurchaseTerms: t,
    showWithdrawalWaiver: l,
    hasAcceptedWithdrawalWaiver: !l || n,
    setHasAcceptedWithdrawalWaiver: s
  }
}