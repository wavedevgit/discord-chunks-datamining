/** Chunk was on web.js **/
/** chunk id: 289333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk997101 = require("./997101.js"),
  Chunk311907 = require("./311907.js"),
  Chunk615405 = require("./615405.js");

function s() {
  let [e, t] = r.useState(false), [n, s] = r.useState(false), l = (0, a.bG)([o.A], () => i.M.EEA_COUNTRIES.has(o.A.ipCountryCodeWithFallback));
  return {
    hasViewedPurchaseTerms: e,
    setHasViewedPurchaseTerms: t,
    showWithdrawalWaiver: l,
    hasAcceptedWithdrawalWaiver: !l || n,
    setHasAcceptedWithdrawalWaiver: s
  }
}